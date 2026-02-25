function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Илья Чумаченков. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
