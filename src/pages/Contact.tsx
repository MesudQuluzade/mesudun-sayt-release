import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <span className="block border-t-2 my-5 border-[#E9EAED] w-full"></span>
      
      <div className="contact-page grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="contact-side">
          <h2 className="text-3xl font-bold text-[#1E3D58] mb-4">Əlaqə</h2>
          <span className="block border-t-2 my-5 border-[#E9EAED] w-full"></span>
          <p className="mb-6 text-gray-600">
            Kompüter problemlərinizi sürətlə həll edirik! Aşağıdakı məlumatlardan istifadə edərək bizimlə əlaqə saxlaya bilərsiniz.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size={24} className="text-gray-500" />
              <div>
                <p className="font-semibold text-gray-700">ÜNVAN:</p>
                <p className="text-gray-600">Kazimagha Karimov St Baku</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={24} className="text-gray-500" />
              <div>
                <p className="font-semibold text-gray-700">ƏLAQƏ NÖMRƏSİ:</p>
                <p className="text-gray-600">+994 51 434 21 42</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaClock size={24} className="text-gray-500" />
              <div>
                <p className="font-semibold text-gray-700">İŞ SAATLARI:</p>
                <p className="text-gray-600">Bazar ertəsi-cümə: 9:00-dan 18:00-a qədər</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope size={24} className="text-gray-500" />
              <div>
                <p className="font-semibold text-gray-700">EMAIL ÜNVAN:</p>
                <p className="text-gray-600">quluzademesud6@gmail.com</p>
              </div>
            </div>
          </div>

          <span className="block border-t-2 my-5 border-[#E9EAED] w-full"></span>
          
          <div className="mt-6">
            <h3 className="font-bold text-gray-700">24 saatlıq məsləhətləşmə xətti</h3>
            <p className="text-gray-600">+994 51 434 21 42</p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-gray-700">Daimi Texniki Dəstək</h3>
            <span className="block border-t-2 my-5 border-[#E9EAED] w-full"></span>
            <p className="text-gray-600">
              Komputerinizdə hər hansı bir problem yarandıqda, 24/7 texniki dəstək xidmətimizdən istifadə edə bilərsiniz.
              Biz hər zaman yanınızdayıq!
            </p>
            <button className="w-[345px] block mx-auto mt-6 py-3 px-6 bg-[#1E3D58] text-white font-semibold rounded-md">
              Müraciət et
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#1E3D58] mb-4">İşlərimizlə bağlı hər hansı bir istək və ya şikayətiniz var?</h2>
          <p className="mb-6 text-gray-600">
            Xidmətlərimizlə bağlı fikirlərinizi bizə bildirin. Aşağıdakı formu dolduraraq suallarınızı yönləndirin.
          </p>
          <form className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-800"
                placeholder="Adınızı daxil edin"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-800"
                placeholder="Soyadınızı daxil edin"
              />
            </div>
            <div className="flex gap-4">
              <select className="py-3 px-4 border border-gray-300 rounded-l-md text-gray-800">
                <option value="Azerbaijan">Azerbaijan</option>
              </select>
              <input
                type="tel"
                className="w-full py-3 px-4 border border-gray-300 rounded-r-md text-gray-800"
                placeholder="+994"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-800"
                placeholder="Email ünvanınızı daxil edin"
              />
            </div>
            <div>
              <select className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-800">
                <option value="Konsultasiya">Konsultasiya seçin</option>
                <option value="Təmir">Təmir</option>
                <option value="Proqram Təminatı">Proqram Təminatı</option>
                <option value="Virus Təmizlənməsi">Virus Təmizlənməsi</option>
                <option value="Data Bərpa">Data Bərpa</option>
                <option value="Digər">Digər</option>
              </select>
            </div>
            <div>
              <textarea
                className="w-full py-3 px-4 border border-gray-300 rounded-md text-gray-800"
                placeholder="Mesajınızı daxil edin"
              ></textarea>
            </div>
            <div>
              <button className="w-[302px] block mx-auto py-3 bg-[#1E3D58] text-white font-semibold rounded-md">
                Göndər
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2441044013676!2d49.92442137586592!3d40.38128217144535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030634ae5a0cc67%3A0x8ef180621fbbbfa3!2sKazimagha%20Karimov%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1726922066553!5m2!1sen!2saz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
