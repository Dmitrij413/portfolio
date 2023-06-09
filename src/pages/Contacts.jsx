const Contacts = () => {
	return (
		<main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">                  
						<h2 className="title-2">Location</h2>
						<p>Saratov, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+79371466603">+7 (937) 146-66-03</a></p>
        	</li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:dmitrij.khramov@bk.ru">dmitrij.khramov@bk.ru</a></p>
          </li>
        </ul>
      </div>
    </main>
	 );
}
 
export default Contacts;