import React from "react"
import { Link } from "gatsby"
import styles from "../scss_modules/components/article.module.scss"

const Article2 = () => {
  return (
    <main>
      <section>
        <h1>How securely connect to your Linux virtual server?</h1>
        <article>
          <p>
            The password authentication is of course some of the solution.
            However it's not the best option, especially when connecting to
            Virtual Server, hosted on the cloud. There is the better way -
            public key authentication. Public key is stored on the server and
            has to match the key of the client trying to connect. You can setup
            your key easly also with so called phrasse - that is password. Only
            client who knows the phrasse and has access to file will be able to
            connect to your Linux server.
          </p>
          <p>
            Here are the steps to enable SSH authentication on Linux server.
          </p>

          <p>
            <strong>1. Generate ssh public key file (with phrasse).</strong>
          </p>
          <p>
            <strong>
              2. Configure your server to use public key authentication with
              that key.
            </strong>
          </p>
          <p>
            <strong>
              3. Connect to the server using your newly created public key.
            </strong>
          </p>
        </article>
      </section>

      <section>
        <h3>I. Generate SSH public key.</h3>

        <article>
          <p>
            The most straight forward way to generate SSH public key is to do it
            on your Linux machine by running ssh-keygen command. Run
          </p>
          <ul>
            <li>ssh-keygen</li>
          </ul>
          <p>
            without any arguments and you will be prompt with few questions.
            First is to enter file in which to save the key.
          </p>
          <p>
            Common location is <strong>~/.ssh</strong> folder and the name
            commonly choosen is id_rsa , so enter:
          </p>
          <ul>
            <li>~/.ssh/id_rsa</li>
          </ul>
          <p>
            Then you will be asked for phrasse. Choose some strong password and
            enter it in the prompt. Confirm the phrasse. If you want to skip
            this step, which is not recomended, just press Enter on both phrasse
            and confirmation of the phrasse.
          </p>
          <p>
            That way you created new public key. To confirm it exists, navigate
            to your user home directory and look for .ssh folder. Within that
            folder you should find your newely created SSH key (id_rsa). Now you
            have to tell your server to use it.
          </p>
        </article>
      </section>

      <section>
        <h3>II. Configure Linux to use SSH public key authenthication</h3>
        <article>
          <p>
            To check the configuration of Linux authentication settings you will
            have to navigate to the <strong>/etc/ssh</strong> directory and look
            at <strong>sshd.config</strong> file. You can display or edit
            content the file with nano editor, for that just enter:
          </p>
          <ul>
            <li>sudo nano /etc/ssh/sshd.config</li>
          </ul>
          <p>Make sure that within that file following lines exist:</p>
          <ul>
            <li>PubkeyAuthentication yes</li>
            <li>AuthorizedKeysFile .ssh/authorized_keys</li>
          </ul>
          <p>
            In the recent versions of Linux those lines are commented out, but
            that doesn’t mean they are disabled. They are just default options
            and ucommenting them will allow you overriding them. So just make
            sure they exist and if commented out they are not override with
            other values.
          </p>
          <p>
            If you noticed the path where authorized keys will be checked by
            Linux is <strong>.ssh/authorized_keys</strong> . That means that the
            key we generated with ssh-keygen script has to be copied to the file
            authorized_keys in hidden .ssh directory at your user home
            directory. You can achieve that by running command:
          </p>
          <ul>
            <li>cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys</li>
          </ul>
        </article>
        <article>
          <p>
            Now you can restart the server and you can ssh to it with your
            newely created public key. But to do so you have to copy it on your
            client machine as well and use it while ssh to the server. Check my
            articule{" "}
            <Link to="/blog#article_1">
              Connect to Linux Virtual Server via Visual Studio Code on Windows
              10 using Secure Shell protocol (SSH) without PuTTY
            </Link>
            .
          </p>
        </article>
      </section>
    </main>
  )
}

export default Article2
