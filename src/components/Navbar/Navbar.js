import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Iconclose from "../../assets/Iconclose.png";
import Facebook from "../../assets/Login/Groupe10064.png";
import Google from "../../assets/Login/search.png";
import Apple from "../../assets/Login/Apple.png";
import back from "../../assets/Login/back.png";
import check from "../../assets/Login/check.png";
import warn from "../../assets/Login/warn.png";
import shape from "../../assets/Login/shape.png";
import shape2 from "../../assets/Login/shape2.png";
import women2 from "../../assets/Login/women2.png";
import women3 from "../../assets/Login/women3.png";
import women from "../../assets/Login/women.png";
import mosque from "../../assets/Login/mosque.png";
import book from "../../assets/Login/open-book.png";
import people from "../../assets/Login/people.png";
import world from "../../assets/Login/world.png";
import kindness from "../../assets/Login/kindness.png";
import Layer from "../../assets/Login/Layer.png";
import arrow from "../../assets/Login/arrow.png";
import Shape from "../../assets/Login/Groupe9844.png";
import { isValidEmail, isValidPassword } from "../../helpers/validation_regex";
import { useParams } from "react-router";
import { useLocation } from 'react-router-dom'

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form";
import Amplify, { Auth } from "aws-amplify";
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: "eu-west-3",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "eu-west-3_9VlcRhTGQ",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "27s3lbjbpuv0vvfdo9phbsgmft",
  },
  oauth: {
    domain: "kadijadomaine.auth.eu-west-3.amazoncognito.com",
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/", //pour prod a changer avant
    scope: ["email", "openid"],
    responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
});

const Navbar = ({ type }) => {
  const [Toggle, setToggle] = useState(false);
  const [Login, setLogin] = useState(type != "");
  const [UserType, setUserType] = useState();
  const [Bienvenue, setBienvenue] = useState(true);
  const [Particulier, setParticulier] = useState(false);
  const [Step, setStep] = useState(0);
  const [Tous, setTous] = useState(false);
  const [verificationModal, setVerificationModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailData, setEmailData] = useState("");
  const [civil, setCivil] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mtp, setMtp] = useState("");
  const location = useLocation();
  // console.log(type);
  // if (type != "") {
  //   setLogin(true)
  // }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
    setValue,
    getValues,
  } = useForm({ defaultValues: { userType: "Particulier" } });
  const onFormSubmit = (data) => {
    const { email, mdp: password } = data;
    console.log("data", data)
    setEmailData(email);
    signUp({ email, password, });
  };
  useEffect(() => {
    // console.log(type)
    // if (type != "") {
    //   setLogin(true)
    const loc = location.pathname.split("/")
    console.log((loc[1]))

    if ((loc).length == 3) {
      console.log((loc[2]))
      setLogin(true)
      if ((loc[2]).split("-")[0] == "par") {
        setValue("userType", "Particulier")
        if ((loc[2]).split("-")[1] == 4) {
          setUserType("Particulier")
          setBienvenue(false)
          setStep(4)
        }
      } else if ((loc[2]).split("-")[0] == "pro") {
        setValue("userType", "Professionnel")
        if ((loc[2]).split("-")[1] == "4") {
          setUserType("Professionnel")
          setBienvenue(false)
          setStep(4)
        }
      } else if ((loc[2]).split("-")[0] == "ass") {
        setValue("userType", "Association")
        if ((loc[2]).split("-")[1] == "6") {
          setUserType("Association")
          setBienvenue(false)
          setStep(6)
        }
      }
    } else if ((loc[1]) == "ass" || (loc[1]) == "par" || (loc[1]) == "pro") {
      console.log((loc[1]))

      setLogin(true)
      if ((loc[1]).split("-")[0] == "par") {
        setValue("userType", "Particulier")
        if ((loc[1]).split("-")[1] == 4) {
          setUserType("Particulier")
          setBienvenue(false)
          setStep(4)
        }
      } else if ((loc[1]).split("-")[0] == "pro") {
        setValue("userType", "Professionnel")
        if ((loc[1]).split("-")[1] == "4") {
          setUserType("Professionnel")
          setBienvenue(false)
          setStep(4)
        }
      } else if ((loc[1]).split("-")[0] == "ass") {
        setValue("userType", "Association")
        if ((loc[1]).split("-")[1] == "6") {
          setUserType("Association")
          setBienvenue(false)
          setStep(6)
        }
      }

    }
    // console.log((loc[1]));

    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => localStorage.setItem("user", JSON.stringify(user)))
      .catch((err) => console.log(err));
  }, []);


  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };
  const handlePasswordValidation = (password) => {
    const isValid = isValidPassword(password);
    return isValid;
  };

  const watchTypeUser = watch("userType", "Particulier"); // when pass no
  // console.log("watchTypeUser", watchTypeUser);
  const tous = () => {
    // console.log(getValues("mosque").length == 4)
    // console.log(getValues("mosque"))
    if (getValues("mosque").length == 4) {
      setValue("mosque", []);
      setTous(false);
    } else {
      setValue("mosque", ["Ecole", "Soutien", "Institut", "Autres"]);
      setTous(true);
    }
    // console.log(getValues("tous"))
  };
  const onSubmitTypeUser = () => {
    setUserType(watchTypeUser);
    setStep(1);
    setBienvenue(false);
  };

  const Next = () => {
    setStep(Step + 1);
  };
  const Previous = () => {
    if (Step == 1) {
      setBienvenue(true);
    }
    setStep(Step - 1);
  };
  const onSubmitStep2 = (data) => {
    Next();
    const { email, mdp: password } = data;
    console.log("data step2", data);
    setEmailData(email);
    setMtp(password)
    signUp({ email, password, });

  };
  const faceBookSingUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Facebook" });
      await Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
        .then((user) => localStorage.setItem("user", JSON.stringify(user)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };
  const googleSingUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Google" });
      const user = Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
        .then((user) => localStorage.setItem("user", JSON.stringify(user)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };
  const appleSignUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "SignInWithApple" });
    } catch (error) {
      console.error(error);
    }
  };
  const signUp = async ({ email, password }) => {
    setLoading(true);
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          // "custom:first_name": first_name,
          // "custom:last_name": last_name,
          email: email
        },
      });
      console.log(user);
      setLoading(false);
      setVerificationModal(true);
    } catch (error) {
      console.log(error);
      if (error.message === "An account with the given email already exists.") {
        setErrorMsg("ce compte existe deja");
      }
      setLoading(false);
    }
  };
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <div className="Nav-wrapper">
      <div className="Nav-Desktop">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-links">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/kadija">Kadija</NavLink>
          </li>
          <li>
            <NavLink to="/compte-professionnel">Compte professionnel</NavLink>
          </li>
          <li>
            <NavLink to="/compte-associatif">Compte associatif</NavLink>
          </li>
          {/* <li>
                        <NavLink to="/blog">blog</NavLink>
                    </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
        <div className="inscr-btn">
          <button onClick={() => setLogin(true)}>S'inscrire</button>
        </div>
      </div>
      <div className="Nav-Mobile">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="sub-nav">
          <div className="sub-navBTN" onClick={() => setToggle(true)}>
            <HiOutlineMenuAlt1 />
          </div>
          <h4>
            La premiére Marketplace dédiée aux produits islamiques et ethniques
          </h4>
          <button onClick={() => setLogin(true)}>S'inscrire</button>
        </div>
      </div>
      {Toggle && (
        <div onClick={() => setToggle(false)} className="overlay"></div>
      )}
      <motion.div
        // whileInView={{ x: [200, 0] }}
        // initial={{x:2500}}
        // // animate={{x:0}}
        // transition={{delay:0.2,ease: "easeOut"}}
        className="horor"
        animate={Toggle ? "open" : "closed"}
        variants={variants}
      >
        <div className="popup-wrapper">
          <div className="popupTitle-wrapper">
            <h2>Menu</h2>
            <div onClick={() => setToggle(false)}>
              <img src={Iconclose} />
            </div>
          </div>
          <div className="nav-links">
            <li>
              <NavLink onClick={() => setToggle(false)} to="/">
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggle(false)} to="/kadija">
                Kadija
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggle(false)}
                to="/compte-professionnel"
              >
                Compte professionnel
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggle(false)} to="/compte-associatif">
                Compte associatif
              </NavLink>
            </li>
            {/* <li>
                        <NavLink to="/blog">blog</NavLink>
                    </li> */}
            <li>
              <NavLink onClick={() => setToggle(false)} to="/contact">
                Contact
              </NavLink>
            </li>
          </div>
        </div>
      </motion.div>
      <motion.div
        // whileInView={{ x: [200, 0] }}
        // initial={{x:2500}}
        // // animate={{x:0}}
        // transition={{delay:0.2,ease: "easeOut"}}
        className="Login"
        animate={Login ? "open" : "closed"}
        style={
          watchTypeUser == "Particulier"
            ? { backgroundColor: "#a31764c7" }
            : watchTypeUser == "Professionnel"
              ? { backgroundColor: "#314FADc7" }
              : { backgroundColor: "#400D72c7" }
        }
        variants={variants}
      >
        {Bienvenue && (
          <div className="Bienvenue-wrapper">
            <div className="popupTitle-wrapper">
              <h2>Bienvenue sur Kadija</h2>
              <div onClick={() => setLogin(false)}>
                <img src={Iconclose} />
              </div>
            </div>
            <p>
              La première marketplace dédiée aux produits islamiques et
              ethniques.
            </p>
            <div className="Radio-wrapper">
              <form>
                <input
                  {...register("userType")}
                  type="radio"
                  id="Particulier"
                  value="Particulier"
                />
                <label for="Particulier">Particulier</label>
                <br></br>
                <input
                  {...register("userType")}
                  type="radio"
                  id="Professionnel"
                  value="Professionnel"
                />
                <label for="Professionnel">Professionnel</label>
                <br></br>
                <input
                  {...register("userType")}
                  type="radio"
                  id="Association"
                  value="Association"
                />
                <label for="Association">Association</label>
                {/* <button type="submit"  >Suivant</button> */}
              </form>
            </div>
            <button onClick={onSubmitTypeUser}>Suivant</button>
          </div>
        )}
        {/* {UserType == "Particulier" && Step == 1 && (
            <div className="Rejoigner-wrapper">
              <div className="popupTitle-wrapper">
                <h2>Rejoigner la communauté !</h2>
                <div
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                >
                  <img src={Iconclose} />
                </div>
                } */}
        {UserType == "Particulier" && Step == 1 && (
          <div className="Rejoigner-wrapper">
            <div className="popupTitle-wrapper">
              <h2>Rejoigner la communauté !</h2>
              <div
                onClick={() => {
                  setLogin(false);
                  setStep(0);
                  setBienvenue(true);
                }}
              >
                <img src={Iconclose} />
              </div>
            </div>
            <div className="social-btns">
              <button className="Facebook-btn" onClick={faceBookSingUp}>
                <p>
                  <span>
                    <img className="check" src={Facebook} />
                  </span>
                  Continuer avec Facebook
                </p>
              </button>
              <button className="Google-btn" onClick={googleSingUp}>
                <p>
                  <span>
                    <img className="check" src={Google} />
                  </span>
                  Continuer avec Google
                </p>
              </button>
              <button className="Apple-btn" onClick={appleSignUp}>
                <p>
                  <span>
                    <img className="check" src={Apple} />
                  </span>
                  Continuer avec Apple
                </p>
              </button>
            </div>
            <p>
              Ou inscrivez-vous avec <span onClick={Next}>email</span>
            </p>
          </div>
        )}
        {UserType == "Particulier" && Step == 2 && (
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="Creez-Particulier-wrapper">
              <div className="Creez-content">
                <div className="etape">
                  <img onClick={Previous} className="check" src={back} />
                  <h5>Etape 1/2</h5>
                  <img
                    onClick={() => {
                      setLogin(false);
                      setStep(0);
                      setBienvenue(true);
                    }}
                    className="check"
                    src={Iconclose}
                  />
                </div>
                <h2>Créez votre compte</h2>
                <p>Adresse e-mail</p>
                <input
                  type="email"
                  name="email"
                  className={
                    errors.email ? "errorInput input-field" : "input-field"
                  }
                  {...register("email", {
                    required: true,
                    validate: handleEmailValidation,
                  })}
                />
                {errors.email?.type === "validate" && (
                  <p className="paraErr">*entrez un email valide.</p>
                )}
                <p>Mot de passe</p>
                <input
                  type="password"
                  name="mdp"
                  className={
                    errors.mdp ? "errorInput input-field" : "input-field"
                  }
                  {...register("mdp", {
                    required: true,
                    validate: handlePasswordValidation,
                  })}
                />
                {/* {errors.mdp?.type === "validate" && (
                  <p className="paraErr">
                    *Votre mot de passe doit avoir au minimum 8 caractéres
                    contenant une lettre majiscule,une lettre miniscule , symbol
                    et un chiffre.
                  </p>
                )} */}
                <div className="check-wrapper">
                  <img className="check" src={warn} />
                  <p>
                    Le mot de passe doit avoir au moins une majuscule, une
                    minuscule, un chiffre, un symbole et un minimum de 8
                    caractères
                  </p>
                </div>
                <p>
                  <span>
                    <img className="check" src={check} />
                  </span>
                  Afficher les caractères
                </p>
              </div>
              <button onClick={onSubmitStep2} type="submit">
                Suivant
              </button>
            </div>
          </form>
        )}
        {UserType == "Particulier" && Step == 3 && (
          <div className="Informations-Particulier-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img className="check" src={back} />
                <h5>Etape 2/2</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Veuillez saisir vos informations</h2>
              <p>Civilité</p>
              <input type="text" />
              <p>Nom</p>
              <input type="text" />
              <p>Prénom</p>
              <input type="text" />
              <p>Numéro de téléphone</p>
              <input type="text" />
            </div>
            <button onClick={Next
            // onFormSubmit
            }>Suivant</button>
          </div>
        )}
        {UserType == "Particulier" && Step == 4 && (
          <div className="Felicitaion-Particulier-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h1>Félicitations !</h1>
              <h3>Votre compte a été créé avec succès </h3>
              <p>
                Vous venez de gagner<span> 30€</span> que vous pouvez dépenser
                sur votre marketplace.
              </p>
              <p>
                <span>
                  Vous serez averti(e) au moment du lancement pour faire votre
                  première visite.
                </span>
              </p>
            </div>
            <div className="img-wrapper">
              <img className="img-women" src={women} />
              <img className="shape" src={shape} />
            </div>
            <p className="connect">
              En vous connectant, vous acceptez{" "}
              <span>les conditions d'utilisation </span>
              et <span>la politique de confidentialité</span> de Kadija, accords
              consultables sur le site de Kadija
            </p>
            <button
              onClick={() => {
                setLogin(false);
                setStep(0);
                setBienvenue(true);
              }}
            >
              Fermer
            </button>
          </div>
        )}
        {UserType == "Professionnel" && Step == 1 && (
          <div className="Creez-Professionnel-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img className="check" onClick={Previous} src={back} />
                <h5>Etape 1/3</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Créez votre boutique en ligne</h2>
              <p>Adresse e-mail</p>
              <input type="text" />
              <p>Mot de passe</p>
              <input type="text" />
              <div className="check-wrapper">
                <img className="check" src={warn} />
                <p>
                  Le mot de passe doit avoir au moin une majuscule, une
                  minuscule, un chiffre, un symbole et un minimum de 8
                  caractères
                </p>
              </div>
              <p>
                <span>
                  <img className="check" src={check} />
                </span>
                Afficher les caractères
              </p>
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Professionnel" && Step == 2 && (
          <div className="Informations-Professionnel-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img className="check" onClick={Previous} src={back} />
                <h5>Etape 2/3</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Informations administrateur</h2>
              <p>Civilité</p>
              <input type="text" />
              <p>Nom</p>
              <input type="text" />
              <p>Prénom</p>
              <input type="text" />
              <p>Numéro de téléphone</p>
              <input type="text" />
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Professionnel" && Step == 3 && (
          <div className="Informations-Professionnel-Boutique-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img className="check" onClick={Previous} src={back} />
                <h5>Etape 3/3</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Informations boutique</h2>
              <p>Nom de la société*</p>
              <input type="text" />
              <p className="small">* Nom qui va apparaitre aux utilisateurs</p>
              <p>Numéro de SIRET</p>
              <input type="text" />
              <p>Adresse complète du siège social</p>
              <input type="text" />
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Professionnel" && Step == 4 && (
          <div className="Felicitaion-Professionnel-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h1>Félicitations !</h1>
              <h3>Vous venez de créer votre espace pro sur Kadija. </h3>
              <p>
                Vous serez informés de la date du lancement de l’application
                pour que vous puissiez intégrer les différentes informations
                liées à votre commerce en ligne.
              </p>
            </div>
            <div className="img-wrapper">
              <img className="img-women" src={women2} />
              <img className="shape" src={shape2} />
            </div>
            <p className="connect">
              En vous connectant, vous acceptez{" "}
              <span>les conditions d'utilisation </span>
              et <span>la politique de confidentialité</span> de Kadija, accords
              consultables sur le site de Kadija
            </p>
            <button
              onClick={() => {
                setLogin(false);
                setStep(0);
                setBienvenue(true);
              }}
            >
              Fermer
            </button>
          </div>
        )}
        {UserType == "Association" && Step == 1 && (
          <div className="Creez-Association-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img onClick={Previous} className="check" src={back} />
                <h5>Etape 1/5</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Créez votre compte associatif</h2>
              <p>Adresse e-mail</p>
              <input type="text" />
              <p>Mot de passe</p>
              <input type="text" />
              <div className="check-wrapper">
                <img className="check" src={warn} />
                <p>
                  Le mot de passe doit avoir au moin une majuscule, une
                  minuscule, un chiffre, un symbole et un minimum de 8
                  caractères
                </p>
              </div>
              <p>
                <span>
                  <img className="check" src={check} />
                </span>
                Afficher les caractères
              </p>
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Association" && Step == 2 && (
          <div className="Informations-Association-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img onClick={Previous} className="check" src={back} />
                <h5>Etape 2/5</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Informations administrateur</h2>
              <p>Civilité</p>
              <input type="text" />
              <p>Nom</p>
              <input type="text" />
              <p>Prénom</p>
              <input type="text" />
              <p>Numéro de téléphone</p>
              <input type="text" />
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Association" && Step == 3 && (
          <div className="Informations-Association-Association-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img onClick={Previous} className="check" src={back} />
                <h5>Etape 3/5</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h2>Informations association</h2>
              <p>Nom de la société*</p>
              <input type="text" />
              <p className="small">* Nom qui va apparaitre aux utilisateurs</p>
              <p>Numéro de SIRET</p>
              <input type="text" />
              <p>Adresse complète du siège social</p>
              <input type="text" />
            </div>
            <button onClick={Next}>Suivant</button>
          </div>
        )}
        {UserType == "Association" && Step == 4 && (
          <div className="Selectionnez-Association-1-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img onClick={Previous} className="check" src={back} />
                <h5>Etape 4/5</h5>
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <div className="title-wrapper">
                <h2>Sélectionnez </h2>
                <h2>vos champs d’actions</h2>
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Mosquée - </h2>
                  <h2>Salle de prière </h2>
                </div>
                <img className="icon" src={mosque} />
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Enseignements</h2>
                  <h2>& instructions</h2>
                </div>
                <img className="book" src={book} />
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Association</h2>
                  <h2>locale</h2>
                </div>
                <img className="book" src={people} />
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Développement</h2>
                  <h2>durable - Sadaqa jariya</h2>
                </div>
                <img className="book" src={world} />
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Développement</h2>
                  <h2>durable - Sadaqa jariya</h2>
                </div>
                <img className="book" src={kindness} />
              </div>
              <div onClick={() => setStep(5)} className="Text-icon-wrapper">
                <div className="Text-wrapper">
                  <h2>Autres</h2>
                </div>
                <img className="book" src={Layer} />
              </div>
            </div>
            <button onClick={() => setStep(6)}>Suivant</button>
          </div>
        )}
        {UserType == "Association" && Step == 5 && (
          <div className="Selectionnez-Association-2-wrapper">
            <div>
              <div className="Creez-content">
                <div className="etape">
                  <img onClick={Previous} className="check" src={back} />
                  <h5>Etape 4/5</h5>
                  <img
                    onClick={() => {
                      setLogin(false);
                      setStep(0);
                      setBienvenue(true);
                    }}
                    className="check"
                    src={Iconclose}
                  />
                </div>
                <div className="title-wrapper">
                  <h2>Sélectionnez </h2>
                  <h2>vos champs d’actions</h2>
                </div>
              </div>

              <div className="checkbox-wrapper" for="tous">
                <p>Tous</p>
                <div className="checkbox-arrow">
                  <input
                    type="checkbox"
                    id="tous"
                    checked={Tous}
                    onClick={() => tous()}
                  />
                  <img className="arrow" src={arrow} />
                </div>
                <img className="shape" src={Shape} />
              </div>
              <hr></hr>
              <div className="checkbox-wrapper">
                <p>Ecole - Collège - Lycée</p>
                <div className="checkbox-arrow">
                  <input
                    type="checkbox"
                    value="Ecole"
                    {...register("mosque", { required: true })}
                  />
                  <img className="arrow" src={arrow} />
                </div>
              </div>
              <hr></hr>
              <div className="checkbox-wrapper">
                <p>Soutien scolaire</p>
                <div className="checkbox-arrow">
                  <input
                    type="checkbox"
                    value="Soutien"
                    {...register("mosque", { required: true })}
                  />
                  <img className="arrow" src={arrow} />
                </div>
              </div>
              <hr></hr>
              <div className="checkbox-wrapper">
                <p>Institut - Madrassa</p>
                <div className="checkbox-arrow">
                  <input
                    type="checkbox"
                    value="Institut"
                    {...register("mosque", { required: true })}
                  />
                  <img className="arrow" src={arrow} />
                </div>
              </div>
              <hr></hr>
              <div className="checkbox-wrapper">
                <p>Autres</p>
                <div className="checkbox-arrow">
                  <input
                    type="checkbox"
                    value="Autres"
                    {...register("mosque", { required: true })}
                  />
                  <img className="arrow" src={arrow} />
                </div>
              </div>
            </div>
            <hr></hr>
            <button onClick={() => setStep(4)}>Suivant</button>
          </div>
        )}{" "}
        {UserType == "Association" && Step == 6 && (
          <div className="Felicitaion-Association-wrapper">
            <div className="Creez-content">
              <div className="etape">
                <img
                  onClick={() => {
                    setLogin(false);
                    setStep(0);
                    setBienvenue(true);
                  }}
                  className="check"
                  src={Iconclose}
                />
              </div>
              <h1>Félicitations !</h1>
              <h3>Vous venez de créer votre espace association sur Kadija. </h3>
              <p>
                Vous serez informés de la date du lancement de l’application
                pour que vous puissiez promouvoir votre cause et engager plus de
                monde.
              </p>
            </div>
            <div className="img-wrapper">
              <img className="img-women" src={women3} />
              <img className="shape" src={shape2} />
            </div>
            <p className="connect">
              En vous connectant, vous acceptez{" "}
              <span>les conditions d'utilisation </span>
              et <span>la politique de confidentialité</span> de Kadija, accords
              consultables sur le site de Kadija
            </p>
            <button
              onClick={() => {
                setLogin(false);
                setStep(0);
                setBienvenue(true);
              }}
            >
              Fermer
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default Navbar;
