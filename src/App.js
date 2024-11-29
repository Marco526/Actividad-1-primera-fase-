import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>¡Bienvenido a Japonés Básico! <br></br> <br></br>Una Aplicación dedicada al estudio del idoma<br></br> </h1>
       <p>Aquí aprenderás: <br></br>---presentaciones--- <br></br>---Saludos---<br></br> ----Expresiones ---<br></br>---Hiragana---- <br></br>---Katakana---<br></br>----Kanjis----<br></br>
Además, encontraras un apartado para saber sobre su cultura y sociedad

Pero antes veamos algunos testimonios de estudiantes que han aprendido en nuestra aplicación 
   </p>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de País. Pero me apasiona aprender nuevas cosas, una de ellas es aprender japonés, A mi parecer es un idioma único. Decidí estudiar en esta Aplicación de "Japonés Basico" puesto que encuentro muchos recursos y cada día voy agarrando más confianza .'/>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Directora de Marketing'
          empresa='ChatDesk'
          testimonio='Amo Japón mi sueño es poder ir un día allá y conocer lugares como Tokyo, Kyoto y Osaka. Pero está la barrera del idioma. Afortunadamente encontré esta App la cual me ha ayudado bastante a mejorar mis presentaciones y ahora me encuentro en un nivel N4. Espero seguir aprendiendo más.'/>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Diseño Gráfico Profesional'
          empresa='Nvidia'
          testimonio='Tengo amigos japoneses, aprovecho recursos de esta App web para conocer expresiones sencillas, al día estudio 15-25 min. He visto mi progreso y me alegra poder entablar plática con ellos día a día. '/>
      </div>
    </div>
  );
}

export default App;
