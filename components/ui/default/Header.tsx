import NavBar from "@/components/ui/default/NavBar";
import styles from "@/components/ui/default/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  );
};

export default Header;
