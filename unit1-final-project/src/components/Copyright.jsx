function Copyright() {

  return (
    <footer style={styles.footer}>
      <p1 style={styles.text}>
        © Meet Me in STL
      </p1>
    </footer>
  );
}

const styles = {
  footer: {
    color: "black",
    padding: "10px 0",
    marginTop: "40px",
    width: "100%",
    fontWeight: "600"
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};

export default Copyright;