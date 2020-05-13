import React from "react"
import styles from "../scss_modules/components/article.module.scss"

const Article1 = () => {
  return (
    <main>
      <section>
        <h1>
          In this article I will discuss how to connect via SSH from your client
          Windows 10 machine to private Virtual Server running Linux OS.
        </h1>
        <article>
          <p>
            How properly setup your VS Code on Windows to be able to connect to
            your Linux Virtual Server? Things are not so straight forward like
            on MacOS or other Linux clients. This is because some older versions
            of Windows 10 haven’t got OpenSSH client installed by default. There
            are many tutorials on the web, which instruct you how to SSH to your
            Linux Virtual Server using Putty, but not many how to do it via
            OpenSSH client (which Putty <strong>is not</strong> compatibile
            with) and later how to configure it on Visual Studio to be able to
            use it from VS Code terminal.
          </p>
          <p>
            This tutorial is based and tested on Windows 10 client and Ubuntu
            18.04 server (however it should work on other Linux distributions as
            well).
          </p>
          <p>
            I will assume that you have installed VS Code – if not you can do it
            right away by:
          </p>
          <ul>
            <li>
              go to{" "}
              <a href="https://code.visualstudio.com/">
                https://code.visualstudio.com/
              </a>
            </li>
            <li>choose your operating System (Windows)</li>
            <li>download and install.</li>
          </ul>

          <p>
            The neccessary tool we will need on Windows 10 to ssh to linux via
            VS Code is <strong>OpenSSH client</strong>.
          </p>
        </article>
      </section>

      <section>
        <h3>
          I. Installing, configuring and testing OpenSSH client on Windows
        </h3>

        <article>
          <p>
            1. To check if you got it installed and active we will log in to
            PowerShell as administrator:
          </p>
          <p>
            press command Window button or click on Search Field left down on
            the screen and type ‘PowerShell’ . On left side navigate with arrows
            to Windows PowerShell and from right side choose ‘Run as
            administrator’ option. After that you will be promped warning, click
            Yes and the terminal window will appear.
          </p>
        </article>

        <article>
          <p>2. Check if OpenSSH client is installed, type:</p>

          <ul>
            <li>Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'</li>
            <li>
              # If installed - this should return something like this:
              <br />
              Name : OpenSSH.Client~~~~0.0.1.0
              <br />
              State : Installed
              <br />
              Name : OpenSSH.Server~~~~0.0.1.0
              <br />
              State : Installed
              <br />
            </li>
          </ul>
          <p>
            If State: Installed – you're fine, OpenSSH is installed already and
            you can skip step 3.
            <br />
            <strong>
              Otherwise State: Not Present – you have to install it manually.
            </strong>
          </p>
        </article>

        <article>
          <p>3. Install OpenSSH by typing:</p>
          <ul>
            <li>
              Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
            </li>
          </ul>
          <p> It should return output like:</p>
          <ul>
            <li>
              Path : <br />
              Online : True <br />
              RestartNeeded : False
              <br />
            </li>
          </ul>
        </article>

        <article>
          <p>
            4. Enable OpenSSH service and firewall configuration. In terminal
            type:
          </p>
          <ul>
            <li>Start-Service sshd </li>
            <li>
              # OPTIONAL but recommended: <br />
              Set-Service -Name sshd -StartupType 'Automatic' <br />
              # Confirm the Firewall rule is configured. It should be created
              automatically by setup. <br />
              Get-NetFirewallRule -Name *ssh* <br />
              # There should be a firewall rule named "OpenSSH-Server-In-TCP",
              which should be enabled <br />
              # If the firewall does not exist, create one <br />
              New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server
              (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action
              Allow -LocalPort 22 <br />
            </li>
          </ul>
          <p>
            !Be aware Step 5 assumes that you configured your server with
            password authentication (5.a) or privateKey authentication (5.b). If
            you’re not sure what is that – please check my other article about{" "}
            <a href="/blog#article_2">Ubuntu Configuration with SSH</a>.
          </p>
        </article>

        <article>
          <p>
            5.a) Check configuration by trying to access your server secured
            with password authentication. In the PowerShell terminal type:
          </p>
          <ul>
            <li>ssh USER@HOST_NAME</li>

            <li>
              # Where USER is your username and HOST_NAME your machine IP
              address or host name, for example: # ssh root@132.234.567.890 or
              ssh root@example.com or ssh admin@132.xxx.xxx.xxx etc …
            </li>
          </ul>
          <p>
            Then type your password and here you are. You should be logged in.
            Be aware that this authentication will succed if and only if you
            enabled password authentication! For security reasons it is always
            better to ssh to your server with use of PublicKey authentication.
            Some of Virtual Hosts Providers such as Digital Ocean or AWS
            Services will allow you to add SSH key on your server at the moment
            of creating Droplet (Digital Ocean) or lunching EC2 Instance (AWS
            Services). If you don’t have generated and enabled SSH Key on your
            server I recommend to do so! Check my
            <a href="/blog#article_2">Ubuntu Configuration with SSH</a> article
            for more info.
          </p>
        </article>

        <article>
          <p>
            5.b) Check configuration by trying to access your server secured
            with PrivateKey authentication:
          </p>
          <ul>
            <li>ssh -i PATH/TO/YOUR/PRIVATE_KEY USER@HOST_NAME</li>

            <li>
              #where PATH/TO/YOUR/PRIVATE_KEY is path where you store private
              key, usually something like: C:\Users\admin\.ssh\id_rsa #where
              admin should be replaced with your Windows User name
              <br />
              # USER is your username on Linux server
              <br />
              #HOST_NAME - your machine IP address or host name
              <br />
              # So for example whole command should look like: ssh -i
              C:\Users\John\.ssh\id_rsa root@example.com or ssh -i
              C:\Users\John\.ssh\id_rsa root@117.18.558.221
              <br />
            </li>
          </ul>
          <p>If you log in for first time you will be promped with:</p>
          <ul>
            <li>
              The authenticity of host 'servername (132.xxx.xxx.xxx)' can't be
              established. ECDSA key fingerprint is SHA256:(
              {"<a large string>"}). Are you sure you want to continue
              connecting (yes/no)?
            </li>
          </ul>
          <p>
            Type: Yes
            <br />
            If your key is not secured with phrasse it should already connect
            you to your Linux VS Server.
            <br />
            If you secured your key with phrasse you will be asked to enter it.
            <br />
            That way you should be logged in. <br />
            But wait. Is this article not about ssh via VS Code not PowerShell?{" "}
            <br />
            Yes it is! That’s just half of the job. Now you have to configure VS
            Code to connect to server just like you would do it through
            PowerShell.
            <br />
          </p>
        </article>
      </section>
      <section>
        <h3>
          II. Installing, configuring and testing Remote-SSH on Visual Studio
          Code
        </h3>
        <article>
          <p>
            Now when you are able to SSH to your server via PowerShell OpenSSH
            client, it is possible to configure VS Code to do it simillar way.
            You will need to install VS Code extension called Remote
            Development.
          </p>
          <ul>
            <li>
              Open VS Code and press Ctrl+Shift+X to open search field for
              extensions.{" "}
            </li>
            <li>Type Remote Development to look for it – click install.</li>
          </ul>
          <p>
            This extension contains actually three extensions, which Remote-SSH
            is the most important for us. After installing you should see in
            left bottom corner small green icon <sub>{">"}</sub>
            <sup>{"<"}</sup>.
          </p>
        </article>
        <article>
          <p>
            First you need to add your server credentials to configuration file
            of Remote-SSH. You will do that by clicking on green icon and
            choosing option
          </p>
          <ul>
            <li>
              Remote-SSH: Open Configuration File…/ #(eventually press F1 and
              search for Remote-SSH: Open Configuration File..).{" "}
            </li>
          </ul>
          <p>
            Choose the top file, the one with a path like{" "}
            <strong>C:\Users\USER\.ssh\config </strong>. <br />
            In that file add following lines:
          </p>
          <ul>
            <li>Host [easy to remember alias of your host machine]</li>
            <li>HostName [name of host or ip address]</li>
            <li>User [user you want to login as]</li>
            <li>
              IdentityFile [path to the ssh key] # skip this if you ssh with
              password only
            </li>
          </ul>
          <p>For Example:</p>
          <ul>
            <li>Host myServer</li>
            <li>HostName 176.111.234.551</li>
            <li>User root</li>
            <li>
              IdentityFile C:\Users\peter\.ssh\id_rsa # skip this if you ssh
              with password only
            </li>
          </ul>
        </article>
        <article>
          <p>
            Save changes in config file. Now click green icon (or press F1) and
            choose option Remote-SSH: Connect To Host… - you should be able to
            choose added host and connect to your server (if you use key
            authentication you will be promped to enter it). That’s it! You can
            enjoy professional editor + terminal to manage content of your
            Virtual Server.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Article1
