### Problem description

Jan De Nul is een groot baggerbedrijf uit Aalst. Het bedrijf wil onderzoeken of het aan de hand van drones de exacte locatie van boeien in zee kan bepalen. Nu gebeurt de meting van boeien manueel vanuit boten, wat tijdrovend en gevaarlijk is. De automatisering van deze meting wordt gerealiseerd met een mobiele applicatie en een grondstation. Op het grondstation worden de boeien herkend en wordt hun locatie berekend. De piloot van de drone kan aan de hand van de applicatie de drone besturen en de locatie van de gekozen boei aflezen. De locatie van de boei wordt voortdurend aangepast en wanneer de boei uit beeld dreigt te driften, wordt de drone aangestuurd om het beeld automatisch te centraliseren. Alle software op het grondstation kan binnen een container draaien. 

#### english

Jan De Nul is a large dredging company based in Aalst. The company aims to investigate whether it can determine the exact location of buoys at sea using drones. Currently, buoy measurements are done manually from boats, which is time-consuming and hazardous. The automation of this measurement is achieved through a mobile application and a ground station. On the ground station, buoys are recognized, and their locations are calculated. The drone pilot can control the drone and read the location of the selected buoy using the application. The buoy's location is continuously adjusted, and when the buoy appears to drift out of view, the drone is directed to automatically centralize the image. All software on the ground station can run within a container.

## System architecture

Door de aard van het project is de deployment een complexe zaak. Boeien moeten gepositioneerd worden aan de hand van een drone die een camera aan boord heeft. De DJI Phantom 4 Pro heeft geen onboard processing-capaciteiten, dus is het noodzakelijk om de computervisie uit te voeren op een extern device. Het project wordt daarom gedistribueerd gedeployed op verschillende devices. De structuur van het volledige project wordt verduidelijkt aan de hand van het  deployment diagram naast deze tekst. De systeemarchitectuur kan roughly opgedeeld worden in twee delen die overeenkomen met enderzijds de mobiele kant die bestaat uit de drone en de bijhorende app en anderzijds het grondstation. De mobiele helft maakt intensief gebruik van de proprietary DJI Mobile SDK. Anderzijds is er het grondstation. Het grondstation voert alle computationele zware taken uit. Hier bevinden zich de computervisie en de logica voor de GPS coördinaten van de boeien te berekenen. Dit deel kan optioneel volledig of deels in containers draaien. Beide delen worden individueel besproken omdat er sprake is van een “losse koppeling” tussen beiden.

#### english + revised

Due to the nature of the project, deployment is a complex matter. Buoys need to be positioned using a drone equipped with a camera. The DJI Phantom 4 Pro lacks onboard processing capabilities, so it is necessary to perform computer vision on an external device. Therefore, the project is deployed as a distributed service that spans across multiple physical devices. The structure of the entire project is clarified by the deployment diagram above. The system architecture can be roughly divided into two parts, corresponding to the mobile side consisting of the drone and its associated app, and the ground station. The mobile part extensively utilizes the proprietary DJI Mobile SDK. The ground station is responsible for all computationally intensive tasks such as as the computer vision and logic for calculating the GPS coordinates of the buoys. This part can optionally run fully or partially in containers. Both parts are discussed individually due to a "loose coupling" between them.

### Smartphone

De drone operator bestuurt de drone aan de hand van een remote controller. Alle communicatie tussen de DJI-drone en de remote controller gebeurt via een propriëtaire draadloze technologie met de naam ‘DJI Lightbridge’. Deze communicatie bevat onder andere het videosignaal van de camera, de GPS-locatie van de drone en de user inputs van de controller. De controller kan verbonden worden met een smartphone met een USB kabel. Via deze kabel stuurt de controller de videofeed en GPS-coordinaten door naar de smartphone. Voor dit project is deze verbinding met een smartphone van cruciaal belang. Op de smartphone draait namelijk een app die de operator een live videofeed aanbiedt van de camera die aanwezig is op de drone. Zo kan de operator de drone correct positioneren boven de boeien. Anderzijds is er ook een GUI aanwezig die de operator in staat stelt om de positie van een boei te meten. 

#### english + revised

The drone operator controls the drone using a remote controller. All communication between the DJI drone and the remote controller occurs through a proprietary wireless technology called 'DJI Lightbridge.' This communication includes, among other things, the video signal from the camera, the GPS location of the drone, and additional data from the controller. The controller can be connected to a smartphone using a USB cable. This connection to a smartphone is crucial for the project because the smartphone runs an app that provides the operator with a live video feed from the drone's camera, allowing the operator to accurately position the drone above the buoys. Additionally, the app features a GUI (Graphical User Interface) that enables the operator to measure the position of a buoy.

### Grondstation 

De computervisie en het berekenen van de posities van de boeien gebeurt op het grondstation. Het grondstation heeft namelijk toegang tot krachtigere hardware dan een smartphone. In principe kan elke mid range laptop het project draaien. Een discrete grafische kaart helpt maar is niet verplicht. De code op het grondstation is volledig geschreven in python. Dit maakt de development aangenamer aangezien de codebase volledig in een taal is geschreven. 

#### english + revised

The computer vision and the calculation of buoy positions are performed on the ground station. The ground station has access to more powerful hardware than a smartphone. In principle, any mid-range laptop can run the project. A discrete graphics card is helpful but not mandatory. The code on the ground station is entirely written in Python. This makes development more enjoyable as the entire codebase is written in a single language.

## Other modules

### RTMP-Server

De JDN Drone App stuurt de video door naar het grondstation. Om deze live video stream te verzenden werd er gekozen voor het Real-Time Messaging Protocol (RTMP) - protocol. RTMP wordt gebruikt voor de first-mile delivery. Dit betekent dat de video van de producent/encoder wordt verstuurd naar een server. De live video feed van de JDN Drone App wordt verstuurd naar het grondstation om daar verwerkt te worden. OpenCV (de computervisie library die gebruikt wordt) kan bijvoorbeeld zeer eenvoudig live frames inlezen en verwerken van een RTMP URL. 

De RTMP-server draait in een container die draait op het grondstation zelf. Op deze manier is er geen latency of instabiliteit in de stream aanwezig. De stream hoeft ook nooit het lokale network te verlaten wat de veiligheid ten goede komt. 

#### english + revised

The JDN Drone App sends the video to the ground station. To transmit this live video stream, the Real-Time Messaging Protocol (RTMP) protocol was chosen. RTMP is used for first-mile delivery, meaning the video is sent from the producer/encoder to a server. The live video feed from the JDN Drone App is sent to the ground station for processing. OpenCV (the computer vision library used) can easily read and process live frames from an RTMP URL.

The RTMP server runs in a container on the ground station itself. This setup eliminates latency and instability in the stream. Furthermore, the stream never needs to leave the local network, enhancing security



### Websockets 

De verbinding tussen de Android-app en het grondstation wordt verwezenlijkt met het WebSocketprotocol. Dit protocol laat bidirectioneel dataverkeer toe tussen een client en een server. De Android-app en het grondstation communiceren door middel van een WebSocket server die draait op het grondstation. 

#### english

The connection between the Android app and the ground station is established using the WebSocket protocol. This protocol allows bidirectional data traffic between a client and a server. The Android app and the ground station communicate through a WebSocket server running on the ground station

### Computervisie 

De computervisie draait op het grondstation. De gebruikte libraries zijn OpenCV en YOLOv5. OpenCV is een library voor real-time computervisie. YOLOv5 is een objectdetectie algoritme dat neurale netten gebruikt. Er zijn twee technieken aanwezig in het project om boeien uit een afbeelding te halen: “Masking” en “Yolov5”. Welke techniek wordt gebruikt moet ingesteld worden voor het project start met draaien. 

#### english

The computer vision runs on the ground station and utilizes the OpenCV and YOLOv5 libraries. OpenCV is a real-time computer vision library, while YOLOv5 is an object detection algorithm that utilizes neural networks. The project incorporates two techniques for extracting buoys from an image: 'Masking' and 'YOLOv5.' The choice of technique must be configured before the project starts running.

