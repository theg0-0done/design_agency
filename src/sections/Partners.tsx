import googleLogo from '../assets/logos_google.png';
import trelloLogo from '../assets/Trello-logo-blue 1.png';
import mondayLogo from '../assets/logos_monday.png';
import notionLogo from '../assets/Notion.png';
import slackLogo from '../assets/Slack.png';

function Partners() {
  return (
    <section id="partners" className="flex flex-col h-fit w-full">
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-5 sm:gap-8 md:gap-0 my-10 md:my-10">
        <img src={googleLogo} alt="google" />
        <img src={trelloLogo} alt="trello" />
        <img src={mondayLogo} alt="monday" />
        <img src={notionLogo} alt="notion" />
        <img src={slackLogo} alt="slack" />
      </div>
      <div className="bottom-0 bg-emerald-100 h-[5vh] w-full"></div>
    </section>
  )
}

export default Partners