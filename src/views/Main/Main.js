import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";

function Main(props) {
  console.log(props.navbar);
  return (
    <>
      <Navbar
        title={props.navbar.title}
        logo={props.navbar.logo}
        links={props.navbar.links}
      />
      <Hero
        title={props.hero.title}
        subtitle={props.hero.subtitle}
        img={props.hero.img}
      />
      <Body
        utilsSection={props.body.utilsSection}
        developersSection={props.body.developersSection}
      />
       <Footer
        contact={props.footer.contact}
        links={props.footer.links}
      />
    </>
  );
}

export default Main;
