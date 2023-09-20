const Footer = () => {
  return (
    <>
      <div
        style={{
          border: '1px solid black',
          padding: '5px',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
        <h4>Всі права захищені</h4>
        <p style={{ margin: 0 }}>
          З питань придбання фільмів звертайтесь за адресою:
        </p>
        <a
          href="www.you-don't-have-enough-money.com"
          target="_blank"
          rel="noreferrer"
        >
          www.you-don't-have-enough-money.com
        </a>
      </div>
    </>
  );
};

export default Footer;
