import React from 'react'

const LocationSection: React.FC = () => {
  return (
    <section className='location'>
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2441044013676!2d49.92442137586594!3d40.38128217144535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030634ae5a0cc67%3A0x8ef180621fbbbfa3!2sKazimagha%20Karimov%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1726681334792!5m2!1sen!2saz"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default LocationSection;
