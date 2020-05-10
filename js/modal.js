var modal = document.getElementById('eventModal');
var mhead = document.getElementById('modal-head');
var mfoot = document.getElementById('modal-foot');
var mbody = document.getElementById('modal-body');
var close = document.getElementById("close");
var body = document.getElementById('event-body');
var event1 = '<p class="text">The Event Is about how efficiently a participant can use the internet to solve the problem given to them.<br>* No. of participants in a team can be one. <br> * No. of rounds = 2 </p><br> <h1>Description of each round-</h1> <br><p class="text">* Round 1: The participants have to search the web for the answers of the given problem to them.<br>* Round 2: Participants have to Add item in their Shopping cart as efficiently as possible within the given amount of money.</p><br><h1>Marking scheme</h1><br><p class="text">* Round 1: The participant who has given the most correct answer <br>* Round 2: The participant who has added the best item in their Shopping cart within the given amount of money </p><br><h1>Rules</h1><br><p class="text">* The participants should perform all the task without any external help.<br>* No late comers allowed.</p>';
var event2 = '<p class="text">Computers are one of the most versatile tools that we have available. They can perform stunning featsof computation, they allow information to be exchanged easily regardless of their physical location, they simplify many every-day tasks, and they allow us to automate many processes that would be tedious or boring to perform otherwise.<br>* No. of participants in a team can be one. <br> * No. of rounds = 2 </p><br> <h1>Description of each round- </h1> <br><p class="text">* Round 1:This round will logical quiz.Twenty questions based on the language created by us. The questions would contain topics related to simple loops, info of the language and outputs. The given time would be 15 minutes.<br>* Round 2: This rouond will be Debuging . It will comprise of 5 questions and the given time would be 30 min.</p><br><h1>Rules</h1><br><p class="text">* No use of mobile phones and internet is allowed.<br>* Solutions of the questions will be given when the time is up.<br>* No extra time would be provided.<br>* Proper instructions before the commencement of the event will be given.<br>* In case of any discrepancy the decision of the event co-ordinator will be final.</p>';
var event3 = '<p class="text">Time attack is a programming related challenge that not only tests your coding skill but also your conceptual knowledge about the codes and their output. The main focus in the challenge is how you will manage your time to do all the questions correctly and in the time provided.<br>* No. of participants in a team can be one. <br> * No. of rounds = 2 </p><br> <h1>Description of each round- </h1> <br><p class="text">* Round 1:It will be a knockout round.15 multiple choice questions will be provided based on the concepts of programming and output of the code.Along with them, three more questions will be provided which could be solved either in writing the code in c/c++/java or providing a detailed algorithm about the problem. Only two of them are to be done.Time provided will be 16 minutes.<br>* Round 2:6 questions will be provided based on real-life problems and one hour is provided to solve all of them in the language of your choice.</p><br><h1>Rules</h1><br><p class="text">* No use of mobile phones and internet is allowed.<br>* No extra time would be provided.<br>* Proper instructions before the commencement of the event will be given.<br>* In case of any discrepancy the decision of the event co-ordinator will be final.</p>';
var event4 = '<p class="text">The race will be organized in two stages-: 1. Drag Race 2. Track Race </p><br> <h1>Description of each round- </h1> <br><p class="text">* Round 1(Drag Race): The race will be simple and all the participants will take part individually one by one. The top 70 percentile participants will go in the second round. The race should be completed in minimum time with the track being followed.  <br>* Round 2(Track Race):The race should be completed in a max. Time of 4min 30 seconds. On track repair time is 1:30 min with time not to be included in the race time. Maximum 13 touches are allowed on the track for bot. Skipping a checkpoint will add 20 seconds to your race time completion. Maximum retries at a checkpoint are 3. Each hand touch for a bot will add 3 seconds to your time. </p><br><h1>Rules</h1><br><p class="text">* The bot’s breadth should not exceed 25 cm.<br>* The input supply voltage to the bot should not exceed 14.8 CElts.<br>* Bots should not exceed a total of 6 tyres.<br>* Bots can be both wired or wireless.<br>* Caterpillar wheels will be appreciated.<br>* The bots will go under an inspection and no offence should be taken.<br>* Make your bots waterproof, the track may or may not contain water.<br>* If there will be any change or modification in any rule it will be told to the participants before the commencement of race.<br>* Team up to 4 members.<br>* Proper instructions before the commencement of the event will be given.<br>* In case of any discrepancy the decision of the event co-ordinator will be final.</p>';
var event5 = '<p class="text">The objective of this contest is for a robot to follow a black line on a white background without losing the line and navigating several 90 degree turns. The robot to complete the course in the shortest period of time while accurately tracking the course line from start to the finish wins.<br>* Team up to 4 members. </p><br><h1>Rules</h1><br><p class="text">* Dimensional and weight limits for robots shall be strictly enforced. Robots must have passed inspection prior to competing. The bots should not exceed the breadth of 25 cm.<br>* Time is measured from the time robot crosses the starting line until the time it crosses the finish line. A robot losing deemed to have 90-degree the line when the forward most wheel, track, or leg of the robot contacts or crosses over the line.<br>* A maximum of 3 minutes is allowed for a robot to complete the course. A robot that cannot complete the course in the allotted time shall be disqualified.<br>* Time shall be measured by an electronic gate system or by a judge with a stopwatch, based on the availability of equipment. In either case the recorded time shall be final.<br>* Once a robot has crossed the starting line it must remain fully autonomous otherwise it will be disqualified.<br>* A robot that wanders off of the arena surface will be disqualified. A robot shall be deemed to have left the arena when any wheel, leg or track has moved completely off the arena surface.<br>* Any robot that loses the line course must reacquire the line at the point where it was lost, or at any earlier (e.g. already traversed) point.<br>* Any robot that loses the line course and fails to reacquire will be allowed a single reattempt. The robot must start the course again from the beginning and if it loses the line course on its second attempt it will be disqualified.<br>* The decisions of all officials regarding these rules and the conduct of the event shall be final.<br>* The line following course shall traverse a white paper rectangle, 44" wide and 96" long. The line shall be a black, 1/2" wide line traversing the arena from end to end. There shall be no crossovers (e.g. places where the line crosses itself). Switchbacks and hairpins are possible, but the adjacent sections of the line shall be no closer together than 15cm when measured from the centre of each line. The line course shall have 1 or more sharp right-angle, but no angle will be greater than 90 degrees.</p>';
var event6 = '<p class="text">The name suggests the fight between two biggest and strongest characters of the Marvel Cinematic Universe. This competition is a fight between the two robots of the participants. The one who gets out of the ring gets during the fight time eliminated. Also, if the bot of a participant stops operating during the competition then it will lead to the elimination of that participant.<br>* Team up to 4 members. </p><br><h1>Rules</h1><br><p class="text">* The bots should not exceed the maximum weight of 10 kgs. The bots should be in the restricted dimensions of 40X25X20 cm3. The bots will be inspected by the officials there before the commencement of competition.<br>* The fight between the two bots will take place for a maximum of 6 minutes. The bots must complete the fight within the time. In a case of not completing the fight an extra time of 1:30 minutes will be given to the participants to fight again.<br>* The time will start when both of the participants will be ready with their bots on arena and start up their bots. The time shall be noticed by the co-ordinators by the help of a stopwatch.<br>* The bots can be both autonomous or remote controlled.<br>* If a bot wanders of the arena or falls of from the arena it will immediately get disqualified and the opponent wins the fight.<br>* No other participants or any of the organizers shall be accountable for the damage done to any bot during or after the competition.<br>* The decision of all the officials regarding these rules and the conduct of the event shall be final.<br></p><br><h1>Point allocation</h1><br><p class="text"* If none of the bots fall off from the arena even after the extra time the winner will be decided by counting the points.<br>* Each time the bot touches the flag placed somewhere at arena, the opponent gets an additional 3 points.<br>* The participants will be asked to choose their side of the arena before competition and will also make sure the opponent doesn’t stay there.<br>* Every 3 seconds spent in the opponent’s area will give an extra point to the contestant.</p>';
var event7 = '<p class="text">Pull up your socks and get ready for the most unique and coolest treasure hunt ever with the amalgamation of elements of Marvel and a tinge of technologies. Adventures of Marvel world are awaiting along with the super heroes!<br>But wait! Don\'t forget the technical crunch it brings for you. So, either a tech-geek or a Marvel-freak come and explore the undiscovered mysteries. Afterall who knows you may end up finding the infinity stones!<br>* Team up to 2-4 members. </p>';
var event8 = '<p class="text">Let’s do some low-key mischief, shall we?God of mischief is a marvel take on our generic Beg/Borrow/Steal.As we all know Loki is never low-key, get ready to be mischievous and gather everything necessary by all means i.e., beg, borrow or steal and yes do it at “full throttle” as you don’t want to mess your sinister vibes with the presence of mighty Avengers. Hitting does not save the world, collecting does!<br>* Team up to 2-3 members. </p>';
var event9 = '<p class="text">Rubik\'s Cube is the weapon of the intelligence. Many can solve it, but only practice makes them a Speedcuber.The "Tesseract trouble" is here to test your efficiency where your skills of cube-solving will be challenged.So, harness your Rubik\'s cube excitement, grab your cubes and practice your moves.</p><br><h1>Rules</h1><br><p class="text">* There will be three rounds in our event. <br>* In first round, participants will be asked to form a face of given colour of the cube. (e.g. we will ask them to form green side or any other side). The time taken by each participant will be noted.<br>* In second round, participants will be asked to solve the whole cube. Time will be again noted for each participant.<br>* In third round, a particular pattern of cube will be shown to the participants and they will be asked to form the pattern.<br>* Time will be noted for each participant<br>* Result will be evaluated by adding the time of each participant. THE PARTICIPANT WITH MINIMUM TOTAL TIME WINS.<br>* In case of any ambiguity or discrepancy, coordinator\'s decision will be final.</p>';
var event10 = '<p class="text">Sudoku is a logic based combinational number placement puzzle. The object is to fill a 9x9 grid with digits.<br> * No. of rounds = 2 </p><br> <h1>Description of each round-</h1> <br><p class="text">* Round 1: The players will be given same set of Sudoku and first four individuals to finish the sets will qualify to the next round.<br>* Round 2: In the second and final round, participants will be required to use the cut-outs of numbers given to them and place them on the blank spaces of Sudoku. The first one to do so will be the winner.</p>';
var event12 = '<p class="text">The competition will be done in 3 rounds.</p><br> <h1>Description of each round-</h1> <br><p class="text">* Round 1: Participants will have to design a logo from the Marvel Cinematic Universe on the theme/genre/topic revealed at the time of event<br>* Round 2: Participants will be given Three images from Marvel cinematic universe. They have to create a new meaningful graphic.<br>* Round 3: Create a release poster from the Marvel Cinematic Universe on the later revealed theme/genre/topic.</p><br><h1>Rules</h1><br><p class="text">* Any use of unfair means may lead to disqualification.<br>* Everyone should bring their own individual laptops along with their individual internet connection.<br>* Photoshop,Illustrator,Corel draw are the Preferred tools.</p>';
var event13 = '<p class="text">The Event is based on the Theme of sustainable management or in simpler word creating best out of waste, where the waste collected is generated from various domains of life.<br>Team can have 1-3 members</p><br> <h1>Judgement-</h1> <br><p class="text">The Judgment of the event would be done on various parameters,Such as Structure design,Effective utilization of provided Junk,Time and Explanation of the created design as structure.</p><br><h1>Rules</h1><br><p class="text">* Every Participant of Team would be given a max Time Limit of 15 - 20 min.<br>* The Junk materials will be provided on the spot by the co-ordinators.<br>* The structure must be designed and created out of the provided Junk only.<br>* The Judgement would be done by the event co-ordinator and must be unquestionable.</p>';
var event14 = '<p class="text">In this event we will have to make the most stable building by using given number of sticks, A4 sheets and adhesive material in limited lap of time.<br>Team can have 1-2 members</p><br><h1>Rules</h1><br><p class="text">* 25 sticks, one A4 sheet and double-sided tape will be provided.<br>* 30 minutes will be provided to complete a task.<br>* Decision of the coordinator shall be final.</p>';
var event15 = '<p class="text">Draw something different keeping marvel comic as well as cinematic universe in mind. Showcase your inner artist and join us in doodling.</p><br><h1>Rules</h1><br><p class="text">* TIME LIMIT 20-25 MINUTES. <br>* IT SHOULD BE RELATED TO MARVEL.Design should be of your own and unique, if found copied, it will be disqualified.<br>* Participants will not be allowed to bring their drawing sheets at the time of event. We will provide them with the sheets.</p>';
var event16 = '<p class="text">So, you think you are in love with circuits and designing? Well, if yes then we are here to test it. Come show us your interest in circuits and debug that we give you. And if you are successful at it, we have something exciting that waits for you. Unveil the excitement. Debug with joy.</p><br><h1>Rules</h1><br><p class="text">Round 1- <br>* For the first round, you will be given few circuits each with just one error.<br>* This is a paper-based round.You will be required to detect the error within the given time limit. <br>Round 2-<br> * The teams qualifying for 2nd  round will be given another circuit to debug.<br>* This round will be implemented on bread-board.This time the circuits may contain multiple errors.<br>* Each error would have different weightage for marks.Also, for each wrong answer negative marks will be given.</p>';
var event17 = '<p class="text"> The event will consist of basic questions from Electronics which would be conducted in 2 rounds. The students can participate in a team of two.</p><br><h1>Rules</h1><br><p class="text">Round 1- <br>* This round will be basic pen and paper / PC based round which would test the basic electronics knowledge of the participants.<br>* It would consist of 20 questions.For each correct answer, there would be +4 marks.There would be -1 marks for incorrect answer.<br>* The top 5 participants/teams would be eligible for the next round. <br>Round 2-<br> * It will have 5 rapid-fire questions.For each successive question, there would be betting of points from 10 points onwards.<br>* The minimum bid should be at least 10 points more than the previous bid.<br>* For each correct answer, the participant(s) get a score equal to the bid points.</p>';
document.getElementById("esurf").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event1;
  modal.style.display = 'block';
}
document.getElementById("loop").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event2;
  modal.style.display = 'block';
}
document.getElementById("time").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event3;
  modal.style.display = 'block';
}
document.getElementById("race").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event4;
  modal.style.display = 'block';
}
document.getElementById("lfr").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event5;
  modal.style.display = 'block';
}
document.getElementById("rob").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event6;
  modal.style.display = 'block';
}
document.getElementById("th").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event7;
  modal.style.display = 'block';
}
document.getElementById("bbb").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event8;
  modal.style.display = 'block';
}
document.getElementById("tt").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event9;
  modal.style.display = 'block';
}
document.getElementById("sud").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event10;
  modal.style.display = 'block';
}
document.getElementById("mq").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event11;
  modal.style.display = 'block';
}
document.getElementById("md").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event12;
  modal.style.display = 'block';
}
document.getElementById("fj").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event13;
  modal.style.display = 'block';
}
document.getElementById("sb").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event14;
  modal.style.display = 'block';
}
document.getElementById("doo").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event15;
  modal.style.display = 'block';
}
document.getElementById("cd").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event16;
  modal.style.display = 'block';
}
document.getElementById("el").onclick = function() {
  document.getElementById('event-name').innerHTML = "new event";
  body.innerHTML = event17;
  modal.style.display = 'block';
}
close.onclick = function() {
  modal.style.display = 'none';
}