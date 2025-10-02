function Partners() {
  return (
    <section id="partners" className="flex flex-col h-fit w-full">
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-5 sm:gap-8 md:gap-0 my-10 md:my-10">
        <img src="/src/assets/logos_google.png" alt="google" />
        <img src="/src/assets/Trello-logo-blue 1.png" alt="trello" />
        <img src="/src/assets/logos_monday.png" alt="monday" />
        <img src="/src/assets/Notion.png" alt="notion" />
        <img src="/src/assets/Slack.png" alt="slack" />
      </div>
      <div className="bottom-0 bg-emerald-100 h-[5vh] w-full"></div>
    </section>
  )
}

export default Partners