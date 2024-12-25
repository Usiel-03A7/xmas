const CartaDePresentacion = () => {
  return (
      <div style={styles.container}>
          <audio autoPlay loop>
              <source src="/navidadrock.mp3" type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
          </audio>
          <div style={styles.card}>
              <h1 style={styles.title}>¡Hola! Anitza (mi futura esposa) 🎄</h1>
              <p style={styles.text}>Mi nombre es <strong>Usiel</strong>, aunque puedes llamarme <strong>"Tu Futuro Esposo"</strong>. 😘</p>
              <p style={styles.text}>Espero que esta Navidad esté llena de alegría, amor y momentos inolvidables. 🕯️✨</p>
              <p style={styles.text}>¡Felices fiestas! 🎁</p>
          </div>
      </div>
  );
};

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f4e9',
      fontFamily: 'Arial, sans-serif',
  },
  card: {
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
      color: '#d23669',
      fontSize: '2rem',
      marginBottom: '15px',
  },
  text: {
      color: '#555',
      fontSize: '1.2rem',
      marginBottom: '10px',
  },
};

export default CartaDePresentacion;
