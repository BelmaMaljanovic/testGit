import './Contact.css'

import { useState } from 'react';

function Contact() {

    const [theme, setTheme] = useState(false);

  return (

    <div className={theme ? 'contact-containterDark' : 'contact-containter'}>
        <div className={theme ? 'contact-pathDark' : 'contact-path'}>

            {/* {pathSegments.map((segment, index) => {
                const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                return (
                    <span key={index}>&gt; <Link to={path}>{decodeURIComponent(segment.replace(/-/g, ' ')).replace(/^\w/, c => c.toUpperCase())}</Link></span>
                );
            })} */}

        </div>

        <div className='contact-details'>
          <div className='contact-detailsd1'>
              <h2>Adresa</h2>
              <div><i class="fa-solid fa-location-dot"></i><p>Bate Jankovića 48 <br/>32000 Čačak, Srbija</p></div>
          </div>

          <div className='contact-detailsd1 cdhover'>
              <h2>Kontakt</h2>
              <div><i class="fa-solid fa-envelope"></i><p>moravskimarket@gmail.com</p></div>
              <div><i class="fa-solid fa-phone"></i><p>061 67 15 941</p></div>
          </div>

          <div className='contact-detailsd1 cdhover'>
              <h2>Pratite nas</h2>
              <div><i class="fa-brands fa-facebook-f"></i><p>Facebook</p></div>
              <div><i class="fa-brands fa-instagram"></i><p>Instagram</p></div>
              <div><i class="fa-brands fa-youtube"></i><p>Youtube</p></div>
          </div>

          <div className='contact-detailsd1'>
              <h2>Radno vreme</h2>
              <div><i class="fa-solid fa-clock"></i><p>Radnim danom: 08:00-17:00h <br/>Vikendom: Ne radimo</p></div>
          </div>

        </div>

        <div className='contact-form'>
            <div className='contact-formh1'><h2 className={theme ? 'h2-dark' : 'h2-light'}>Pišite nam, pristupite mreži uspešnih prodavaca...</h2></div>
            <div className='contact-formf'>
              <div className='contact-two-inputs'><input className={theme ? 'input-dark' : 'input-light'} placeholder='Ime'></input><input className={theme ? 'input-dark' : 'input-light'} placeholder='Email'></input></div>
              <div className='contact-full-input'><input className={theme ? 'input-dark' : 'input-light'} placeholder='Predmet'></input></div>
              <div className='contact-full-input'><input className={theme ? 'input-dark' : 'input-light'} placeholder='Poruka'></input></div>
            </div>

            <div className='contact-form-captcha'>
              <div className='contact-captcha'></div>
              <div className='contact-button'><button><i class="fa fa-paper-plane" aria-hidden="true"></i>Posaljite</button></div>
            </div>



        </div>





        <div className='contact-map'></div>

    </div>

  )
}

export default Contact


