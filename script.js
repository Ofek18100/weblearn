console.log("script loaded");
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const stories = ["story1", "story2", "story3"];
stories.push("It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.");

const regexName = /\bBob\b/g;
const regexTemperature = /\bfahrenheit\b/g

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function replaceName(inputString, newName, toReplace) {
   // \b ensures that it matches the whole word "John" and not part of another word
  const result = inputString.replace(toReplace, newName);
  return result;
}

function generateStory(){
	let currentStory = randomValueFromArray(stories);
	console.log("current story is : " + currentStory);
	
	//check if ther is name mentioned
	if(customName.value !== ""){
		currentStory = replaceName(currentStory, customName.value, regexName);
	}

	//check if language is mentioned
	if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    currentStory = replaceName(currentStory, "celzios", regexTemperature);
  }
	story.textContent = currentStory;

	if (story.style.visibility ="hidden"){
		story.style.visibility = 'visible';	
	}
}
randomize.addEventListener('click', generateStory);

