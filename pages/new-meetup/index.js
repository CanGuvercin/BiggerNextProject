import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetUpHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
        // Here you would typically send the data to a server or API
        // For example, using fetch or axios to post the data
        // fetch('/api/meetups', {
        //   method: 'POST',
        //   body: JSON.stringify(enteredMeetupData),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

    };

  return <NewMeetUpForm />;
}

export default NewMeetupPage;