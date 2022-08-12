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

# # Setup Environment

#@title Import modules

print('Loading needed modules. Please wait...')


import re
import sys
import os
from os import path
from threading import Thread
import secrets
import requests # for MuseNet API
import json
from http.server import BaseHTTPRequestHandler, HTTPServer
from midi2audio import FluidSynth

print()
print('the CWD should be sitting at the `bard-bot/web-app/` folder') # eg, home/jacob/Code/bard-bot/web-app/
print(f'CWD: {os.getcwd()}')
print()

tmidix_path = path.abspath('python-server/tegridy-tools/tegridy-tools')
# add tdmidix path to system path
if tmidix_path not in sys.path:
    sys.path.append(tmidix_path)
import TMIDIX # for MIDI processing

GENRE_LIST = ["chopin","mozart","rachmaninoff","ladygaga","country","disney","jazz","bach","beethoven","journey","thebeatles","video","broadway","franksinatra","bluegrass","tchaikovsky","liszt","everything","ragtime","andrehazes","cocciante","thecranberries","ligabue","metallica","traffic","philcollins","nineinchnails","thepretenders","sugarray","grandfunkrailroad","ron","ellington","fleetwoodmac","thebeachboys","kool & the gang","foreigner","tlc","scottjames","benfoldsfive","smashmouth","oasis","allsaints","donnasummer","weezer","bjork","mariahcarey","berte","cheaptrick","caroleking","thecars","gganderson","robertpalmer","zucchero","alicecooper","vanhalen","brucehornsby","coolio","jimmybuffett","lobo","badcompany","eminem","creedenceclearwaterrevival","deeppurple","shearinggeorge","robbiewilliams","dalla","ub40","lindaronstadt","sinatra","inxs","jonimitchell","michaeljackson","last","devo","shaniatwain","korn","brooksgarth","sweet","thewho","roxette","bowiedavid","beegees","renefroger","mina","estefangloria","mccartney","theventures","carboni","simplyred","santana","jewel","meatloaf","giorgia","nofx","rickymartin","thecure","thetemptations","tozzi","beck","eiffel65","jenniferlopez","reelbigfish","patsycline","richardcliff","styx","acdc","brucespringsteen","michaelgeorge","blondie","pinkfloyd","oldfieldmike","redhotchilipeppers","therollingstones","morandi","heart","robertaflack","pantera","alabama","jethrotull","hanson","mosch","ludwigvanbeethoven","dvorak","chrisrea","guns n' roses","duranduran","ericclapton","bettemidler","bwitched","gordonlightfoot","thegrassroots","chicago","whitezombie","michaelbolton","paulsimon","marillion","thepointersisters","theanimals","cher","haydn","aerosmith","supertramp","littleriverband","america","tonyorlando","tompetty","thecorrs","aliceinchains","kiss","prince","toto","vanmorrison","wagner","cashjohnny","annielennox","enya","thedoobiebrothers","thetragicallyhip","rush","laurapausini","stevemillerband","simonandgarfunkel","fiorellamannoia","olivianewton-john","carlysimon","elvispresley","vangelis","bobdylan","bbking","vengaboys","paoli","thehollies","alainsouchon","pooh","raf","fiorello","lionelrichie","jimihendrix","theeverlybrothers","limpbizkit","donhenley","georgeharrison","threedognight","johnmellencamp","carpenters","raycharles","basie","billyocean","scorpions","royorbison","whitneyhouston","ironmaiden","jovanotti","alanjackson","barrymanilow","hueylewis","kennyloggins","chopinfrederic","talkingheads","themonkees","rem","jeanmicheljarre","michelezarrillo","eurythmics","thedoors","guesswho","miller","thefourseasons","matiabazar","tompettyandtheheartbreakers","chickcorea","scottjoplin","amedeominghi","bryanadams","paulaabdul","rossivasco","billyjoel","daniele","claudedebussy","gilbert & sullivan","chakakhan","nirvana","garbage","andreabocelli","johnnyrivers","emerson, lake & palmer","theallmanbrothersband","zappa","boston","mango","barbrastreisand","willsmith","ozzyosbourne","janetjackson","antonellovenditti","u2","humperdinckengelbert","jamiroquai","zero","chuckberry","spicegirls","ledzeppelin","masini","thekinks","eagles","billyidol","alanismorissette","joecocker","jimcroce","bobmarley","blacksabbath","stonetemplepilots","silverchair","paulmccartney","blur","nek","greenday","thepolice","depechemode","rageagainstthemachine","madonna","rogerskenny","brooks & dunn","883","thedrifters","amygrant","herman","toriamos","eltonjohn","britneyspears","lennykravitz","celentano","ringostarr","neildiamond","aqua","oscarpeterson","joejackson","moby","collinsphil","leosayer","takethat","electriclightorchestra","pearljam","marcanthony","borodin","petshopboys","stevienicks","hollybuddy","turnertina","annaoxa","zztop","sting","themoodyblues","ruggeri","creed","claudebolling","renzoarbore","erasure","elviscostello","airsupply","tinaturner","leali","petergabriel","nodoubt","bread","huey lewis & the news","brandy","level42","radiohead","georgebenson","wonderstevie","thesmashingpumpkins","cyndilauper","rodstewart","bush","ramazzotti","bobseger","theshadows","gershwin","cream","biagioantonacci","steviewonder","nomadi","direstraits","davidbowie","amostori","thealanparsonsproject","johnlennon","crosbystillsnashandyoung","battiato","kansas","clementi","richielionel","yes","brassensgeorges","steelydan","jacksonmichael","buddyholly","earthwindandfire","natkingcole","therascals","bonjovi","alanparsons","backstreetboys","glencampbell","howardcarpendale","thesupremes","villagepeople","blink-182","jacksonbrowne","sade","lynyrdskynyrd","foofighters","2unlimited","battisti","hall & oates","stansfieldlisa","genesis","boyzone","theoffspring","tomjones","davematthewsband","johnelton","neilyoung","dionnewarwick","aceofbase","marilynmanson","taylorjames","rkelly","grandi","sublime","edvardgrieg","tool","bachjohannsebastian","patbenatar","celinedion","queen","soundgarden","abba","drdre","defleppard","dominofats","realmccoy","natalieimbruglia","hole","spinners","arethafranklin","reospeedwagon","indian","movie","scottish","irish","african","taylorswift","shakira","blues","latin","katyperry","world","kpop","africandrum","michaelbuble","rihanna","gospel","beyonce","chinese","arabic","adele","kellyclarkson","theeagles","handel","rachmaninov","schumann","christmas","dance","punk","natl_anthem","brahms","rap","ravel","burgmueller","other","schubert","granados","albeniz","mendelssohn","debussy","grieg","moszkowski","godowsky","folk","mussorgsky","kids","balakirev","hymns","verdi","hummel","deleted","delibes","saint-saens","puccini","satie","offenbach","widor","songs","stravinsky","vivaldi","gurlitt","alkan","weber","strauss","traditional","rossini","mahler","soler","sousa","telemann","busoni","scarlatti","stamitz","classical","jstrauss2","gabrieli","nielsen","purcell","donizetti","kuhlau","gounod","gibbons","weiss","faure","holst","spohr","monteverdi","reger","bizet","elgar","czerny","sullivan","shostakovich","franck","rubinstein","albrechtsberger","paganini","diabelli","gottschalk","wieniawski","lully","morley","sibelius","scriabin","heller","thalberg","dowland","carulli","pachelbel","sor","marcello","ketterer","rimsky-korsakov","ascher","bruckner","janequin","anonymous","kreutzer","sanz","joplin","susato","giuliani","lassus","palestrina","smetana","berlioz","couperin","gomolka","daquin","herz","campion","walthew","pergolesi","reicha","polak","holborne","hassler","corelli","cato","azzaiolo","anerio","gastoldi","goudimel","dussek","prez","cimarosa","byrd","praetorius","rameau","khachaturian","machaut","gade","perosi","gorzanis","smith","haberbier","carr","marais","glazunov","guerrero","cabanilles","losy","roman","hasse","sammartini","blow","zipoli","duvernoy","aguado","cherubini","victoria","field","andersen","poulenc","d'aragona","lemire","krakowa","maier","rimini","encina","banchieri","best","galilei","warhorse","gypsy","soundtrack","encore","roblaidlow","nationalanthems","benjyshelton","ongcmu","crosbystillsnashyoung","smashingpumpkins","aaaaaaaaaaa","alanismorrisette","animenz","onedirection","nintendo","disneythemes","gunsnroses","rollingstones","juliancasablancas","abdelmoinealfa","berckmansdeoliveira","moviethemes","beachboys","davemathews","videogamethemes","moabberckmansdeoliveira","unknown","cameronleesimpson","johannsebastianbach","thecarpenters","elo","nightwish","blink182","emersonlakeandpalmer","tvthemes"]

class MuseNetQueryServer(BaseHTTPRequestHandler):
    def do_POST(self):
        # 1. parse json body from request
        print('Parsing json body from request...')
        content_len = int(self.headers.get('Content-Length'))
        post_body = self.rfile.read(content_len)
        data = json.loads(post_body)

        # 2. generate full_filename where the file will be placed
        base_filename = data['fname']
        base_filepath = path.abspath(path.join(
          'public', 'music', base_filename))
        midi_filepath = base_filepath + '.mid'
        wav_filepath = base_filepath + '.wav'
        # sanitize the filename before writing to disk
        if not re.match(r'[a-zA-Z0-9_\-\.\s]+', base_filename):
            self.send_error(400, 'fname must be only letters, numbers and underscores')


        # 3. asynchronously get the data from the MuseNet API
        Thread(
          target=generate_midi, 
          args=(
            data['genre'],  # genre
            data['piano'],  # piano
            data['strings'],  # strings
            data['winds'],  # winds
            data['drums'],  # drums
            data['harp'],  # harp
            data['guitar'],  # guitar
            data['bass'],  # bass
            data['number_of_tokens_to_generate'],  # number_of_tokens_to_generate
            data['temperature'],  # temperature
            data['truncation'],  # truncation
            base_filename,  # base_filename
            midi_filepath,  # midi_filepath
            wav_filepath  # wav_filepath
          )).start()

        # 4. Bode a cheery farewell and return json data
        print(f'`Done` generating {base_filename}. Enjoy!')
        print('Returning json data...')
        return_data = {'filepath': wav_filepath}
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(bytes(json.dumps(return_data), "utf8"))

# MuseNet Companion notebook (ver 0.7)
# Powered by tegridy-tools: https://github.com/asigalov61/tegridy-tools
# Source code is courtesy of https://github.com/MrCheeze/musenet-midi and https://github.com/daanklijn/musenet-midi-py
# Modified from code released under the Apache-2.0 license and includes unmodified code licensed under lgpl-3.0
def generate_midi(
  genre,
  piano,
  strings,
  winds,
  drums,
  harp,
  guitar,
  bass,
  number_of_tokens_to_generate,
  temperature,
  truncation,
  base_filename,
  midi_filepath,
  wav_filepath
):

    print('filepaths:',
          base_filename,
          midi_filepath,
          wav_filepath,
          '', sep='\n')

    if genre == 'random':
      genre = GENRE_LIST[secrets.randbelow(len(GENRE_LIST))]
    
    print(f'Requesting data from the MuseNet API for {base_filename}...')
    response = requests.post(
      'https://musenet.openai.com/sample', 
      headers={"Content-Type": "application/json"},
      json={
        "genre": genre,
        "instrument": {
          "piano": piano,
          "strings": strings,
          "winds": winds,
          "drums": drums,
          "harp": harp,
          "guitar": guitar,
          "bass": bass
        },
        "encoding": "",
        "temperature": temperature,
        "truncation": truncation,
        "generationLength": number_of_tokens_to_generate,
        "audioFormat": "audio/ogg"
    })
    
    print(f'Decoding response from MuseNet API for {base_filename}...')
    print(response.status_code)
    res = response.json()
    encoding = [int(y) for y in res['completions'][0]['encoding'].split()]
    
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
    
    encoding = [int(y) for y in res['completions'][0]['encoding'].split()]
    
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
    
    output_signature = 'MuseNet Companion'
    track_name = base_filename # 'Project Los Angeles'
    number_of_ticks_per_quarter = 1000
    list_of_MIDI_patches = [0, 24, 32, 40, 42, 46, 56, 71, 73, 0, 0, 0, 0, 0, 0, 0]
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
    
    with open(midi_filepath, 'wb') as midi_file:
        midi_file.write(midi_data)
        midi_file.close()
    print(f'{base_filename} saved to {midi_filepath}')

    # Convert MIDI to WAV
    print(f'Converting {base_filename} to WAV...')
    fs = FluidSynth("/usr/share/sounds/sf2/FluidR3_GM.sf2", 16000)
    fs.midi_to_audio(midi_filepath, wav_filepath)
    print(f'{base_filename} saved to {wav_filepath}')


hostName = "localhost" # TODO: maybe change this for production
serverPort = 1234 # this const is also specified in the dockerfile

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MuseNetQueryServer)
    print(f"Python server running on http://{hostName}:{serverPort}")
    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass
    webServer.server_close()
    print("Server stopped.")


# import time
# test_filename = f'test_{time.time()}'
# generate_midi(
#   genre='bach',
#   piano=True,
#   strings=True,
#   winds=True,
#   drums=False,
#   harp=False,
#   guitar=False,
#   bass=False,
#   number_of_tokens_to_generate=128,
#   temperature=0.75,
#   truncation=0,
#   base_filename=test_filename,
#   midi_filepath=path.abspath(f'public/music/{test_filename}.mid'),
#   wav_filepath=path.abspath(f'public/music/{test_filename}.wav')
# )