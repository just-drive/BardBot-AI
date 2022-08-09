# # MuseNet Companion (ver 0.7)
# 
# # OpenAI MuseNet API Colab Notebook
# 
# ***
# 
# ### Powered by tegridy-tools: https://github.com/asigalov61/tegridy-tools
# 
# ### Source code is courtesy of https://github.com/MrCheeze/musenet-midi and https://github.com/daanklijn/musenet-midi-py
# 
# ***
# 
# ### Project Los Angeles
# ### Tegridy Code 2022
# 
# ***

# %% [markdown]
# # Setup Environment

# %%
#@title Import modules

print('Loading needed modules. Please wait...')


import re
import sys
import os
from os import path
import secrets
import requests # for MuseNet API
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

tmidix_path = path.abspath('python-server/tegridy-tools/tegridy-tools')
# add tdmidix path to system path
if tmidix_path not in sys.path:
    sys.path.append(tmidix_path)
import TMIDIX # for MIDI processing

# for plotting/listening only
#import matplotlib.pyplot as plt
#import pretty_midi
#import librosa.display
#import matplotlib.pyplot as plt
#from IPython.display import display, Javascript, HTML, Audio

os.chdir(path.abspath('..'))
print('Done!')

# %% [markdown]
# # Querry the MuseNet API

hostName = "localhost" # TODO: maybe change this for production
serverPort = 8080 # this const is also specified in the dockerfile

class MuseNetQueryServer(BaseHTTPRequestHandler):
    def do_POST(self):
        # 1. parse json body from request
        print('Parsing json body from request...')
        content_len = int(self.headers.get('Content-Length'))
        post_body = self.rfile.read(content_len)
        data = json.loads(post_body)

        # 2. get the data from the MuseNet API
        print('Querying MuseNet API...')
        full_filename = generate_midi(
            data['genre'],
            data['piano'],
            data['strings'],
            data['winds'],
            data['drums'],
            data['harp'],
            data['guitar'],
            data['bass'],
            data['fname'],
            data['number_of_tokens_to_generate'],
            data['temperature'],
            data['truncation'],
        )

        # 3. return json data
        print('Returning json data...')
        return_data = {'filename': full_filename}
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(return_data), "utf8"))
        
        print('Done! Filename: ' + full_filename)


if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MuseNetQueryServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")


def generate_midi(
  genre,
  piano,
  strings,
  winds,
  drums,
  harp,
  guitar,
  bass,
  fname,
  number_of_tokens_to_generate,
  temperature,
  truncation,
):
    #@title Querry API
    """
    fname: str

    #@markdown Select a genre from dropdown menu
    genre = 'bluegrass' #@param ["chopin", "mozart", "rachmaninoff", "ladygaga", "country", "disney", "jazz", "bach", "beethoven", "journey", "thebeatles", "video", "broadway", "franksinatra", "bluegrass", "tchaikovsky", "liszt", "everything", "ragtime", "andrehazes", "cocciante", "thecranberries", "ligabue", "metallica", "traffic", "philcollins", "nineinchnails", "thepretenders", "sugarray", "grandfunkrailroad", "ron", "ellington", "fleetwoodmac", "thebeachboys", "kool & the gang", "foreigner", "tlc", "scottjames", "benfoldsfive", "smashmouth", "oasis", "allsaints", "donnasummer", "weezer", "bjork", "mariahcarey", "berte", "cheaptrick", "caroleking", "thecars", "gganderson", "robertpalmer", "zucchero", "alicecooper", "vanhalen", "brucehornsby", "coolio", "jimmybuffett", "lobo", "badcompany", "eminem", "creedenceclearwaterrevival", "deeppurple", "shearinggeorge", "robbiewilliams", "dalla", "ub40", "lindaronstadt", "sinatra", "inxs", "jonimitchell", "michaeljackson", "last", "devo", "shaniatwain", "korn", "brooksgarth", "sweet", "thewho", "roxette", "bowiedavid", "beegees", "renefroger", "mina", "estefangloria", "mccartney", "theventures", "carboni", "simplyred", "santana", "jewel", "meatloaf", "giorgia", "nofx", "rickymartin", "thecure", "thetemptations", "tozzi", "beck", "eiffel65", "jenniferlopez", "reelbigfish", "patsycline", "richardcliff", "styx", "acdc", "brucespringsteen", "michaelgeorge", "blondie", "pinkfloyd", "oldfieldmike", "redhotchilipeppers", "therollingstones", "morandi", "heart", "robertaflack", "pantera", "alabama", "jethrotull", "hanson", "mosch", "ludwigvanbeethoven", "dvorak", "chrisrea", "guns n' roses", "duranduran", "ericclapton", "bettemidler", "bwitched", "gordonlightfoot", "thegrassroots", "chicago", "whitezombie", "michaelbolton", "paulsimon", "marillion", "thepointersisters", "theanimals", "cher", "haydn", "aerosmith", "supertramp", "littleriverband", "america", "tonyorlando", "tompetty", "thecorrs", "aliceinchains", "kiss", "prince", "toto", "vanmorrison", "wagner", "cashjohnny", "annielennox", "enya", "thedoobiebrothers", "thetragicallyhip", "rush", "laurapausini", "stevemillerband", "simonandgarfunkel", "fiorellamannoia", "olivianewton-john", "carlysimon", "elvispresley", "vangelis", "bobdylan", "bbking", "vengaboys", "paoli", "thehollies", "alainsouchon", "pooh", "raf", "fiorello", "lionelrichie", "jimihendrix", "theeverlybrothers", "limpbizkit", "donhenley", "georgeharrison", "threedognight", "johnmellencamp", "carpenters", "raycharles", "basie", "billyocean", "scorpions", "royorbison", "whitneyhouston", "ironmaiden", "jovanotti", "alanjackson", "barrymanilow", "hueylewis", "kennyloggins", "chopinfrederic", "talkingheads", "themonkees", "rem", "jeanmicheljarre", "michelezarrillo", "eurythmics", "thedoors", "guesswho", "miller", "thefourseasons", "matiabazar", "tompettyandtheheartbreakers", "chickcorea", "scottjoplin", "amedeominghi", "bryanadams", "paulaabdul", "rossivasco", "billyjoel", "daniele", "claudedebussy", "gilbert & sullivan", "chakakhan", "nirvana", "garbage", "andreabocelli", "johnnyrivers", "emerson, lake & palmer", "theallmanbrothersband", "zappa", "boston", "mango", "barbrastreisand", "willsmith", "ozzyosbourne", "janetjackson", "antonellovenditti", "u2", "humperdinckengelbert", "jamiroquai", "zero", "chuckberry", "spicegirls", "ledzeppelin", "masini", "thekinks", "eagles", "billyidol", "alanismorissette", "joecocker", "jimcroce", "bobmarley", "blacksabbath", "stonetemplepilots", "silverchair", "paulmccartney", "blur", "nek", "greenday", "thepolice", "depechemode", "rageagainstthemachine", "madonna", "rogerskenny", "brooks & dunn", "883", "thedrifters", "amygrant", "herman", "toriamos", "eltonjohn", "britneyspears", "lennykravitz", "celentano", "ringostarr", "neildiamond", "aqua", "oscarpeterson", "joejackson", "moby", "collinsphil", "leosayer", "takethat", "electriclightorchestra", "pearljam", "marcanthony", "borodin", "petshopboys", "stevienicks", "hollybuddy", "turnertina", "annaoxa", "zztop", "sting", "themoodyblues", "ruggeri", "creed", "claudebolling", "renzoarbore", "erasure", "elviscostello", "airsupply", "tinaturner", "leali", "petergabriel", "nodoubt", "bread", "huey lewis & the news", "brandy", "level42", "radiohead", "georgebenson", "wonderstevie", "thesmashingpumpkins", "cyndilauper", "rodstewart", "bush", "ramazzotti", "bobseger", "theshadows", "gershwin", "cream", "biagioantonacci", "steviewonder", "nomadi", "direstraits", "davidbowie", "amostori", "thealanparsonsproject", "johnlennon", "crosbystillsnashandyoung", "battiato", "kansas", "clementi", "richielionel", "yes", "brassensgeorges", "steelydan", "jacksonmichael", "buddyholly", "earthwindandfire", "natkingcole", "therascals", "bonjovi", "alanparsons", "backstreetboys", "glencampbell", "howardcarpendale", "thesupremes", "villagepeople", "blink-182", "jacksonbrowne", "sade", "lynyrdskynyrd", "foofighters", "2unlimited", "battisti", "hall & oates", "stansfieldlisa", "genesis", "boyzone", "theoffspring", "tomjones", "davematthewsband", "johnelton", "neilyoung", "dionnewarwick", "aceofbase", "marilynmanson", "taylorjames", "rkelly", "grandi", "sublime", "edvardgrieg", "tool", "bachjohannsebastian", "patbenatar", "celinedion", "queen", "soundgarden", "abba", "drdre", "defleppard", "dominofats", "realmccoy", "natalieimbruglia", "hole", "spinners", "arethafranklin", "reospeedwagon", "indian", "movie", "scottish", "irish", "african", "taylorswift", "shakira", "blues", "latin", "katyperry", "world", "kpop", "africandrum", "michaelbuble", "rihanna", "gospel", "beyonce", "chinese", "arabic", "adele", "kellyclarkson", "theeagles", "handel", "rachmaninov", "schumann", "christmas", "dance", "punk", "natl_anthem", "brahms", "rap", "ravel", "burgmueller", "other", "schubert", "granados", "albeniz", "mendelssohn", "debussy", "grieg", "moszkowski", "godowsky", "folk", "mussorgsky", "kids", "balakirev", "hymns", "verdi", "hummel", "deleted", "delibes", "saint-saens", "puccini", "satie", "offenbach", "widor", "songs", "stravinsky", "vivaldi", "gurlitt", "alkan", "weber", "strauss", "traditional", "rossini", "mahler", "soler", "sousa", "telemann", "busoni", "scarlatti", "stamitz", "classical", "jstrauss2", "gabrieli", "nielsen", "purcell", "donizetti", "kuhlau", "gounod", "gibbons", "weiss", "faure", "holst", "spohr", "monteverdi", "reger", "bizet", "elgar", "czerny", "sullivan", "shostakovich", "franck", "rubinstein", "albrechtsberger", "paganini", "diabelli", "gottschalk", "wieniawski", "lully", "morley", "sibelius", "scriabin", "heller", "thalberg", "dowland", "carulli", "pachelbel", "sor", "marcello", "ketterer", "rimsky-korsakov", "ascher", "bruckner", "janequin", "anonymous", "kreutzer", "sanz", "joplin", "susato", "giuliani", "lassus", "palestrina", "smetana", "berlioz", "couperin", "gomolka", "daquin", "herz", "campion", "walthew", "pergolesi", "reicha", "polak", "holborne", "hassler", "corelli", "cato", "azzaiolo", "anerio", "gastoldi", "goudimel", "dussek", "prez", "cimarosa", "byrd", "praetorius", "rameau", "khachaturian", "machaut", "gade", "perosi", "gorzanis", "smith", "haberbier", "carr", "marais", "glazunov", "guerrero", "cabanilles", "losy", "roman", "hasse", "sammartini", "blow", "zipoli", "duvernoy", "aguado", "cherubini", "victoria", "field", "andersen", "poulenc", "d'aragona", "lemire", "krakowa", "maier", "rimini", "encina", "banchieri", "best", "galilei", "warhorse", "gypsy", "soundtrack", "encore", "roblaidlow", "nationalanthems", "benjyshelton", "ongcmu", "crosbystillsnashyoung", "smashingpumpkins", "aaaaaaaaaaa", "alanismorrisette", "animenz", "onedirection", "nintendo", "disneythemes", "gunsnroses", "rollingstones", "juliancasablancas", "abdelmoinealfa", "berckmansdeoliveira", "moviethemes", "beachboys", "davemathews", "videogamethemes", "moabberckmansdeoliveira", "unknown", "cameronleesimpson", "johannsebastianbach", "thecarpenters", "elo", "nightwish", "blink182", "emersonlakeandpalmer", "tvthemes"]

    #@markdown Select instruments
    piano = True #@param {type:"boolean"}
    strings = True #@param {type:"boolean"}
    winds = True #@param {type:"boolean"}
    drums = False #@param {type:"boolean"}
    harp = True #@param {type:"boolean"}
    guitar = True #@param {type:"boolean"}
    bass = True #@param {type:"boolean"}

    #@markdown Generation settings
    number_of_tokens_to_generate = 512 #@param {type:"slider", min:64, max:8192, step:8}
    temperature = 1.2 #@param {type:"slider", min:0.1, max:2, step:0.1}
    truncation = 0 #@param {type:"integer"}"""

    # make sure fname is only letters and numbers and underscores
    if not re.match(r'^[a-zA-Z0-9_]+$', fname):
        return
        #raise ValueError('fname must be only letters, numbers and underscores')
    
    c_encoding = ''
    # TODO: don't touch for now, but if it works, 
    # allow the user to change it with a track name of their choice
    track_name = 'Project Los Angeles' 

    genreList = ["chopin","mozart","rachmaninoff","ladygaga","country","disney","jazz","bach","beethoven","journey","thebeatles","video","broadway","franksinatra","bluegrass","tchaikovsky","liszt","everything","ragtime","andrehazes","cocciante","thecranberries","ligabue","metallica","traffic","philcollins","nineinchnails","thepretenders","sugarray","grandfunkrailroad","ron","ellington","fleetwoodmac","thebeachboys","kool & the gang","foreigner","tlc","scottjames","benfoldsfive","smashmouth","oasis","allsaints","donnasummer","weezer","bjork","mariahcarey","berte","cheaptrick","caroleking","thecars","gganderson","robertpalmer","zucchero","alicecooper","vanhalen","brucehornsby","coolio","jimmybuffett","lobo","badcompany","eminem","creedenceclearwaterrevival","deeppurple","shearinggeorge","robbiewilliams","dalla","ub40","lindaronstadt","sinatra","inxs","jonimitchell","michaeljackson","last","devo","shaniatwain","korn","brooksgarth","sweet","thewho","roxette","bowiedavid","beegees","renefroger","mina","estefangloria","mccartney","theventures","carboni","simplyred","santana","jewel","meatloaf","giorgia","nofx","rickymartin","thecure","thetemptations","tozzi","beck","eiffel65","jenniferlopez","reelbigfish","patsycline","richardcliff","styx","acdc","brucespringsteen","michaelgeorge","blondie","pinkfloyd","oldfieldmike","redhotchilipeppers","therollingstones","morandi","heart","robertaflack","pantera","alabama","jethrotull","hanson","mosch","ludwigvanbeethoven","dvorak","chrisrea","guns n' roses","duranduran","ericclapton","bettemidler","bwitched","gordonlightfoot","thegrassroots","chicago","whitezombie","michaelbolton","paulsimon","marillion","thepointersisters","theanimals","cher","haydn","aerosmith","supertramp","littleriverband","america","tonyorlando","tompetty","thecorrs","aliceinchains","kiss","prince","toto","vanmorrison","wagner","cashjohnny","annielennox","enya","thedoobiebrothers","thetragicallyhip","rush","laurapausini","stevemillerband","simonandgarfunkel","fiorellamannoia","olivianewton-john","carlysimon","elvispresley","vangelis","bobdylan","bbking","vengaboys","paoli","thehollies","alainsouchon","pooh","raf","fiorello","lionelrichie","jimihendrix","theeverlybrothers","limpbizkit","donhenley","georgeharrison","threedognight","johnmellencamp","carpenters","raycharles","basie","billyocean","scorpions","royorbison","whitneyhouston","ironmaiden","jovanotti","alanjackson","barrymanilow","hueylewis","kennyloggins","chopinfrederic","talkingheads","themonkees","rem","jeanmicheljarre","michelezarrillo","eurythmics","thedoors","guesswho","miller","thefourseasons","matiabazar","tompettyandtheheartbreakers","chickcorea","scottjoplin","amedeominghi","bryanadams","paulaabdul","rossivasco","billyjoel","daniele","claudedebussy","gilbert & sullivan","chakakhan","nirvana","garbage","andreabocelli","johnnyrivers","emerson, lake & palmer","theallmanbrothersband","zappa","boston","mango","barbrastreisand","willsmith","ozzyosbourne","janetjackson","antonellovenditti","u2","humperdinckengelbert","jamiroquai","zero","chuckberry","spicegirls","ledzeppelin","masini","thekinks","eagles","billyidol","alanismorissette","joecocker","jimcroce","bobmarley","blacksabbath","stonetemplepilots","silverchair","paulmccartney","blur","nek","greenday","thepolice","depechemode","rageagainstthemachine","madonna","rogerskenny","brooks & dunn","883","thedrifters","amygrant","herman","toriamos","eltonjohn","britneyspears","lennykravitz","celentano","ringostarr","neildiamond","aqua","oscarpeterson","joejackson","moby","collinsphil","leosayer","takethat","electriclightorchestra","pearljam","marcanthony","borodin","petshopboys","stevienicks","hollybuddy","turnertina","annaoxa","zztop","sting","themoodyblues","ruggeri","creed","claudebolling","renzoarbore","erasure","elviscostello","airsupply","tinaturner","leali","petergabriel","nodoubt","bread","huey lewis & the news","brandy","level42","radiohead","georgebenson","wonderstevie","thesmashingpumpkins","cyndilauper","rodstewart","bush","ramazzotti","bobseger","theshadows","gershwin","cream","biagioantonacci","steviewonder","nomadi","direstraits","davidbowie","amostori","thealanparsonsproject","johnlennon","crosbystillsnashandyoung","battiato","kansas","clementi","richielionel","yes","brassensgeorges","steelydan","jacksonmichael","buddyholly","earthwindandfire","natkingcole","therascals","bonjovi","alanparsons","backstreetboys","glencampbell","howardcarpendale","thesupremes","villagepeople","blink-182","jacksonbrowne","sade","lynyrdskynyrd","foofighters","2unlimited","battisti","hall & oates","stansfieldlisa","genesis","boyzone","theoffspring","tomjones","davematthewsband","johnelton","neilyoung","dionnewarwick","aceofbase","marilynmanson","taylorjames","rkelly","grandi","sublime","edvardgrieg","tool","bachjohannsebastian","patbenatar","celinedion","queen","soundgarden","abba","drdre","defleppard","dominofats","realmccoy","natalieimbruglia","hole","spinners","arethafranklin","reospeedwagon","indian","movie","scottish","irish","african","taylorswift","shakira","blues","latin","katyperry","world","kpop","africandrum","michaelbuble","rihanna","gospel","beyonce","chinese","arabic","adele","kellyclarkson","theeagles","handel","rachmaninov","schumann","christmas","dance","punk","natl_anthem","brahms","rap","ravel","burgmueller","other","schubert","granados","albeniz","mendelssohn","debussy","grieg","moszkowski","godowsky","folk","mussorgsky","kids","balakirev","hymns","verdi","hummel","deleted","delibes","saint-saens","puccini","satie","offenbach","widor","songs","stravinsky","vivaldi","gurlitt","alkan","weber","strauss","traditional","rossini","mahler","soler","sousa","telemann","busoni","scarlatti","stamitz","classical","jstrauss2","gabrieli","nielsen","purcell","donizetti","kuhlau","gounod","gibbons","weiss","faure","holst","spohr","monteverdi","reger","bizet","elgar","czerny","sullivan","shostakovich","franck","rubinstein","albrechtsberger","paganini","diabelli","gottschalk","wieniawski","lully","morley","sibelius","scriabin","heller","thalberg","dowland","carulli","pachelbel","sor","marcello","ketterer","rimsky-korsakov","ascher","bruckner","janequin","anonymous","kreutzer","sanz","joplin","susato","giuliani","lassus","palestrina","smetana","berlioz","couperin","gomolka","daquin","herz","campion","walthew","pergolesi","reicha","polak","holborne","hassler","corelli","cato","azzaiolo","anerio","gastoldi","goudimel","dussek","prez","cimarosa","byrd","praetorius","rameau","khachaturian","machaut","gade","perosi","gorzanis","smith","haberbier","carr","marais","glazunov","guerrero","cabanilles","losy","roman","hasse","sammartini","blow","zipoli","duvernoy","aguado","cherubini","victoria","field","andersen","poulenc","d'aragona","lemire","krakowa","maier","rimini","encina","banchieri","best","galilei","warhorse","gypsy","soundtrack","encore","roblaidlow","nationalanthems","benjyshelton","ongcmu","crosbystillsnashyoung","smashingpumpkins","aaaaaaaaaaa","alanismorrisette","animenz","onedirection","nintendo","disneythemes","gunsnroses","rollingstones","juliancasablancas","abdelmoinealfa","berckmansdeoliveira","moviethemes","beachboys","davemathews","videogamethemes","moabberckmansdeoliveira","unknown","cameronleesimpson","johannsebastianbach","thecarpenters","elo","nightwish","blink182","emersonlakeandpalmer","tvthemes"]
    if genre == 'random':
      genre = genreList[secrets.randbelow(len(genreList))]

    print('Starting up...')

    headers = {"Content-Type": "application/json"}

    data = json.dumps({
        
            "genre": genre,

            "instrument":{
              "piano": piano,
              "strings": strings,
              "winds": winds,
              "drums": drums,
              "harp": harp,
              "guitar": guitar,
              "bass": bass
            },

          "encoding": c_encoding,

          "temperature": temperature,

          "truncation": truncation,

          "generationLength": number_of_tokens_to_generate,

          "audioFormat": "audio/ogg"})

    print('Requesting data from the MuseNet API. Please wait...')
    response = requests.post('https://musenet.openai.com/sample', headers=headers, data=data)

    print('Decoding...')
    res = response.json()

    encoding = [int(y) for y in res['completions'][0]['encoding'].split()]

    print('Done!')

    # # Convert MuseNet output to MIDI

    which_completion = 0 #@param {type:"slider", min:-1, max:3, step:1}
    #@markdown -1 == random completion selection

    print('Parsing data...')

    INSTRUMENTS = ["piano", "piano", "piano", "piano", "piano", "piano", "piano", "piano", "piano",
                  "piano", "piano", "piano", "piano", "piano",
                  "violin", "violin", "cello", "cello", "bass", "bass", "guitar", "guitar",
                  "flute", "flute", "clarinet", "clarinet", "trumpet", "trumpet", "harp", "harp"]

    TRACK_INDEX = {"piano": 0, "guitar": 1, "bass": 2,  "violin": 3, "cello": 4,  "flute": 5,
                  "clarinet": 6, "harp": 7, "trumpet": 8, "drum": 9}

    R_TRACK_INDEX = {0: "piano", 1: "guitar", 2: "bass", 3: "violin", 4: "cello", 5: "flute",
                  6: "clarinet", 7: "harp", 8: "trumpet", 9: "drum"}


    VOLUMES = [0, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 80, 0, 80, 0, 80, 0, 80, 0, 80,
              0, 80, 0, 80, 0, 80, 0, 100]

    DRUM_VELOCITY = 80

    DELAY_MULTIPLIER = 20

    FNAME = f'/tmp/{fname}'

    if which_completion > -1:
      COMPLETION = which_completion 
    else:
      COMPLETION = secrets.randbelow(4)

    encoding = [int(y) for y in res['completions'][COMPLETION]['encoding'].split()]


    song = []
    delta_times = 0
    for token in encoding:
        if 0 <= int(token) < 3840:
            note = int(token) % 128
            inst_vol_index = (int(token) // 128) 
            velocity = VOLUMES[inst_vol_index]
            channel = TRACK_INDEX[INSTRUMENTS[inst_vol_index]]
            delay = delta_times
            if velocity > 0:
              song.append(['note_on', delay * DELAY_MULTIPLIER, channel, note, velocity])

            else:
              song.append(['note_off', delay * DELAY_MULTIPLIER, channel, note, velocity])

            
        elif 3840 <= int(token) < 3968:
            note = int(token) % 128
            inst_vol_index = (int(token) // 128)
            velocity = 100
            channel = 9 
            delay = delta_times

            song.append(['note_on', delay* DELAY_MULTIPLIER, channel, note, velocity])



            song.append(['note_off', delay+1 * DELAY_MULTIPLIER, channel, note, 0])


        elif 3968 <= int(token) < 4096:
            delta_times = (int(token) % 128)
            
        elif int(token) == 4096:
          pass
            #return {"type": "start"}
        else:
            pass

    print('Converting to MIDI. Please stand-by...')

    output_signature = 'MuseNet Companion'
    number_of_ticks_per_quarter = 1000
    list_of_MIDI_patches = [0, 24, 32, 40, 42, 46, 56, 71, 73, 0, 0, 0, 0, 0, 0, 0]
    output_file_name = FNAME
    text_encoding='ISO-8859-1'


    output_header = [number_of_ticks_per_quarter, 
                        [['track_name', 0, bytes(output_signature, text_encoding)]]]                                                    

    patch_list = [['patch_change', 0, 0, list_of_MIDI_patches[0]], 
                  ['patch_change', 0, 1, list_of_MIDI_patches[1]],
                  ['patch_change', 0, 2, list_of_MIDI_patches[2]],
                  ['patch_change', 0, 3, list_of_MIDI_patches[3]],
                  ['patch_change', 0, 4, list_of_MIDI_patches[4]],
                  ['patch_change', 0, 5, list_of_MIDI_patches[5]],
                  ['patch_change', 0, 6, list_of_MIDI_patches[6]],
                  ['patch_change', 0, 7, list_of_MIDI_patches[7]],
                  ['patch_change', 0, 8, list_of_MIDI_patches[8]],
                  ['patch_change', 0, 9, list_of_MIDI_patches[9]],
                  ['patch_change', 0, 10, list_of_MIDI_patches[10]],
                  ['patch_change', 0, 11, list_of_MIDI_patches[11]],
                  ['patch_change', 0, 12, list_of_MIDI_patches[12]],
                  ['patch_change', 0, 13, list_of_MIDI_patches[13]],
                  ['patch_change', 0, 14, list_of_MIDI_patches[14]],
                  ['patch_change', 0, 15, list_of_MIDI_patches[15]],
                  ['track_name', 0, bytes(track_name, text_encoding)]]

    output = output_header + [patch_list + song]

    midi_data = TMIDIX.opus2midi(output, text_encoding)


    full_filename = path.abspath(f'{output_file_name}.mid')
    with open(full_filename, 'wb') as midi_file:
        midi_file.write(midi_data)
        midi_file.close()

    print('Done! Enjoy! :)')

    print('Rendering and plotting generated output...')

    """
    pm = pretty_midi.PrettyMIDI(FNAME + '.mid')

    # Retrieve piano roll of the MIDI file
    piano_roll = pm.get_piano_roll()

    plt.figure(figsize=(14, 5))
    librosa.display.specshow(piano_roll, x_axis='time', y_axis='cqt_note', fmin=1, hop_length=160, sr=16000, cmap=plt.cm.hot)
    plt.title(FNAME)
    print(TMIDIX.score2stats(TMIDIX.opus2score(output)))
    FluidSynth("/usr/share/sounds/sf2/FluidR3_GM.sf2", 16000).midi_to_audio(str(FNAME + '.mid'), str(FNAME + '.wav'))
    Audio(str(FNAME + '.wav'), rate=16000)
    """

    return full_filename