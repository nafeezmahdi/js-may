const hasMeeting = true;

// Creating a Promise
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    // If no meeting is scheduled, create meeting details
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
    // Resolve the Promise with meetingDetails
  } else {
    reject(new Error("Meeting already scheduled"));
    // If a meeting already exists, reject the Promise
  }
});

// Function that returns a Promise (to simulate async behavior)
const addToCalender = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calendar);
  // returns a resolved Promise with calendar string
};

// An async function to use await syntax
async function myMeeting() {
  try {
    const meetingInfo = await meeting;
    // Waits for the meeting Promise to resolve or reject
    const time = await addToCalender(meetingInfo);
    // If meeting resolved, adds it to calendar
    console.log(time);
  } catch {
    console.log("Error");
    const meetingInfo = await meeting;
    // Waits for the meeting Promise to resolve or reject
    const time = await addToCalender(meetingInfo);
    // If meeting resolved, adds it to calendar
  }
}

myMeeting(); // Invoke the async function
console.log("Async Await"); // This will run first due to async non-blocking behavior
