import Layout from "../../components/Layout";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext } from "react";
import style from "../../styles/signup.module.css";
import Image from "next/image";
import emailPicture from "../../public/images/input_email.png";
import passwordPicture from "../../public/images/input_password.png";

export default function LoginPage({ csrfToken }) {
  const { currentUserProfile } = useContext(CurrentUserContext);
  const { query } = useRouter();

  return (
    <Layout pageTitle={"Login"}>
      {currentUserProfile ? (
        <>
          <div className={style.mainContainerUserLogged}>
            <div className={style.containerTitle}>
              <p className={style.title}>
                Bienvenue {currentUserProfile.firstname}!
              </p>
            </div>
            <div className={style.containerInfos}>
              <p className={style.title}>Vos informations</p>
              <p>Prénom : {currentUserProfile.firstname} </p>
              <p>Nom : {currentUserProfile.lastname} </p>
              <p>Mail : {currentUserProfile.email} </p>
              <p>N° de tel : {currentUserProfile.phoneNumber} </p>
              <p>Adresse : {currentUserProfile.address} </p>
              <p>Société : {currentUserProfile.society}</p>
            </div>
            <div className={style.containerCourse}>
              <p className={style.title}>Récapitulatif de vos trajets</p>
              <table className={style.containerTable}>
                <tr>
                  <th>Trajet effectué le</th>
                  <th>Type de trajet</th>
                  <th>Chauffeur</th>
                  <th>Prix</th>
                </tr>
              </table>
              <div className={style.subtitle}>
                Vous n{"'"}avez pas encore de trajet !
              </div>
            </div>
            <button
              className={style.buttonSignOut}
              data-cy="disconnectBtn"
              onClick={() => signOut()}
            >
              Déconnexion
            </button>{" "}
          </div>
        </>
      ) : (
        <>
          <h1 className={style.mainTitle}>Identification :</h1>
          <form
            className={style.signUpForm}
            method="post"
            action="/api/auth/callback/credentials"
            data-cy="loginForm"
          >
            <input
              id="csrfToken"
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
            />
            <div className={style.inputDiv}>
              <label htmlFor="email">
                <Image src={emailPicture} alt="Email" />
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Email"
                data-cy="email"
              />
            </div>
            <div className={style.inputDiv}>
              <label htmlFor="password">
                <Image src={passwordPicture} alt="Email" />
              </label>
              <input
                name="password"
                type="password"
                id="password"
                data-cy="password"
                placeholder="Mot de passe"
              />
            </div>
            {query.error === "CredentialsSignin" && (
              <p className={style.wrongDatas}>
                Identifiants incorrects ! Merci de rééssayer
              </p>
            )}
            <button data-cy="credentials-login-btn" type="submit">
              Se connecter
            </button>

            <h2 className={style.mainTitle}>Ou :</h2>
            <button type="button">
              <Link href="/signup" passHref>
                S&rsquo;inscrire
              </Link>
            </button>
            <button>
              <Link href="/signup_invite" passHref>
                <a style={{ opacity: "0.4" }}>
                  Continuer en tant qu&rsquo;invité
                </a>
              </Link>
            </button>
          </form>
        </>
      )}
    </Layout>
  );
}

const getCsrfTokenAndSetCookies = async ({ res, query }) => {
  // to make it work on Vercel
  let baseUrl = process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}`;
  // capturing the callback url if any, which should include the current domain for security ?
  const callbackUrlIsPresent = typeof query?.callbackUrl === "string";
  const callbackUrlIsValid =
    callbackUrlIsPresent && query?.callbackUrl.startsWith(baseUrl);
  const host = callbackUrlIsValid ? query?.callbackUrl : baseUrl;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const csrfUrl = `${baseUrl}/api/auth/csrf?callbackUrl=${redirectURL}`;
  const csrfResponse = await fetch(csrfUrl);
  const { csrfToken } = await csrfResponse.json();
  const { headers } = csrfResponse;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return csrfToken;
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfTokenAndSetCookies(context),
    },
  };
}
