const discord = require ('discord.js');

 var client = new discord.Client();


 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("cheacking 5 servers | !helpp");
     
     

     answered = true;
     cAnswer = "";
     userAnswer = "";
     });

 const fs = require("fs");
 client.msgs = require ("./msgs.json");

 client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Members");
    member.addRole (role);

 })

 client.on('guildMemberAdd' , member => {
     const channel = member.guild.channels.find ('name', 'welcome');
     if (!channel) return;
    channel.send(`:wave: Welcome to the server, :smile: ${member} :smile:`);
    });
 
client.on('guildMemberRemove' , member => {
    const channel = member.guild.channels.find ('name', 'welcome');
    if (!channel) return;
    channel.send(`:wave: Bye We will miss you ,:sob: ${member} :sob:`);
});

 const prefix = "!";
 client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    let mention = message.mentions.users.first() || message.author

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (mentionMessage);
        message.channel.send ("Message has been sent!");
    }

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong :sob:");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }

    if (msg.startsWith(prefix + "quiz")) {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("How amazing is Ibbe: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "a"; break;
            case 2: message.channel.send ("How many dogs live on the moon?"); cAnswer = "0"; break;
            case 3: message.channel.send ("When was Kilroy created?"); cAnswer = "1940"; break;
        }
        answered = false;
    }


    if (msg.startsWith (prefix + "hello")) {
        message.reply ("Hi!");
    }
    
    if (msg.startsWith (prefix + "infosss")) {
        embed = new discord.RichEmbed ()
            .setAuthor ("?? INVITE REWARDS ??")
            .setDescription ("These are the invite rewards ! \n 2: Random account (1+ skin) \n --More income..")
            .setFooter ("This invite rewards was created by Ibbe")
            .setThumbnail ("https://cdn.discordapp.com/attachments/550018287405367306/550712951485759508/JPEG_20190228_155714.jpg")
            .setColor ("00ff00")

        message.channel.send (embed);    
    }

    if (msg.startsWith (prefix + "helpp")) {
        embed2 = new discord.RichEmbed ()
            .setAuthor ("What's the server for ? ?? Looking for info ? here is the commands ?? :")
            .setDescription (" --!infos \n --!helpp \n --!owner \n --!hello \n --!write + write something and then !get \n -- ??More coming soon??...!")
            .setFooter ("This commands was created by Skanheroo.")
            .setThumbnail ("https://cdn.discordapp.com/attachments/550018287405367306/550712951485759508/JPEG_20190228_155714.jpg")
            .setColor ("00ff00")

        message.channel.send (embed2);
    }
  
  if (msg.startsWith (prefix + "creator")) {
        embed = new discord.RichEmbed () 
        .setDescription ("My creator is Skanheroo!")
        .setFooter ("Thank Skanheroo#5277 for creating me!")
        .setThumbnail ("https://cdn.discordapp.com/attachments/553669028564959290/553856357753946112/unknown.png")
        .setColor ("00ff00")
        message.channel.send (embed);
    }

    if (msg.startsWith (prefix + "kick")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("KICK_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been kicked for" + reason);
        mention.send ("You have been kicked because: \n" + reason).then (d_msg => {
            message.guild.member(mention).kick(reason);
        })
            
    }


    if (msg.startsWith (prefix + "ban")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("BAN_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been banned for " + reason);
        mention.send ("You have been banned because: \n" + reason).then (d_msg => {
            message.guild.member(mention).ban(reason);
        })
            
    }

    if (msg.startsWith (prefix + "crole") && message.member.hasPermission ("MANAGE_ROLES")) {
        messageSplit = message.content.split (" ", 3);
        roleName = messageSplit[1];
        roleColor = messageSplit[2].toUpperCase();
        addRolePerson = message.member;
        if (mention != null) { addRolePerson = message.guild.member(mention);}
        message.guild.createRole ( { 
            name: roleName,
            color: roleColor,
            mentionable: true,
         }).then (role => addRolePerson.addRole(role));
         message.channel.send ("**The Role** " + roleName + " **has been added.**").then (d_msg => d_msg.delete(3000));
         message.delete(3000);
    }

    if(message.content.startsWith(`${prefix}createchannel`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const args = message.content.slice(15);
        message.guild.createChannel(`${args}`).then(channel => {
            channel.setTopic(`This is Ibbe channel!`)
        })
    }

    if (msg.startsWith ("!owner")) {
        message.channel.send ("This guy is the owner !", {files: ["./images/Ibbbe.PNG"]});
    }

    if (msg.startsWith (".fortnitegen") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
        number = 30;
        var random2 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random2) {
            case 1: mention.send ("thebigkid27@gmail.com:Cardinals27"); break;
            case 2: mention.send ("fengyyml@163.com:356126153f"); break;
            case 3: mention.send ("andron2002@outlook.com:Andron2001"); break;
            case 4: mention.send ("crazyaussy@hotmail.ca:Austyn2002"); break;
            case 5: mention.send ("samsung5000@gmail.com:G3d3g4fl3r"); break;
            case 6: mention.send ("sinkay_gw2@hotmail.com:soloyo90"); break;
            case 7: mention.send ("ascalonn@hotmail.co.uk:12ax7wbB"); break;
            case 8: mention.send ("laclin127@gmail.com:hello1234"); break;
            case 9: mention.send ("devilsagony3@gmail.com:Happyzone1"); break;
            case 10: mention.send ("courtney.valentin@yahoo.com:Kangaroo1964"); break;
            case 11: mention.send ("theyuyu0408@yahoo.co.jp:7072iori549"); break;
            case 12: mention.send ("chris.current@yahoo.com:ctc32120"); break;
            case 13: mention.send ("meister_windu1@hotmail.com:Michele77"); break;
            case 14: mention.send ("dooody.life2012@hotmail.com:mr.dooodycute_10"); break;
            case 15: mention.send ("paolo.spinelli68@gmail.com:Archivio1"); break;
            case 16: mention.send ("bzorgen@mail.ru:pjhuty123"); break;
            case 17: mention.send ("mrsmitch1@aol.com:Katiedenise1"); break;
            case 18: mention.send ("ant.antwilliams@gmail.com:Manutd211"); break;
            case 19: mention.send ("theodorpang@hotmail.com:Michelle01"); break;
            case 20: mention.send ("andre.wesch@web.de:mela1234"); break;
            case 21: mention.send ("mekanik_89@hotmail.es:medioelfo3"); break;
            case 22: mention.send ("heydenne28@hotmail.fr:aemk280809"); break;
            case 23: mention.send ("sergiotb95@gmail.com:S0YunGN0M0"); break;
            case 24: mention.send ("tanner.alger2@gmail.com:Hotcheetos4"); break;
            case 25: mention.send ("seregka-miron@mail.ru:serega20"); break;
            case 26: mention.send ("x.rambler@yandex.ru:grinader32"); break;
            case 27: mention.send ("matthamel1408@gmail.com:Peanut69"); break;
            case 28: mention.send ("clem.63@sfr.fr:clecle2404"); break;
            case 29: mention.send ("je51156@bigpond.net.au:chadd399"); break;
            case 30: mention.send ("hubert.amandine3000@outlook.com:mot2passe"); break;
            }
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (random2);
        embed = new discord.RichEmbed()
        .setDescription("I have successfully sent u the fortnite account ! Please cheack your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }
  
  if (msg.startsWith (prefix + "fortnitegen") && message.member.hasPermission ("VIEW_AUDIT_LOG")) {
        number = 40;
        var random2 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random2) {
            case 1: mention.send ("malfy5@gmail.com:pokemonball24"); break;
            case 2: mention.send ("maki.makay@gmail.com:Volcano5"); break;
            case 3: mention.send ("artem_kolomnikov@mail.ru:azx21618"); break;
            case 4: mention.send ("jordanleric@gmail.com:Dirtbike627"); break;
            case 5: mention.send ("maurice@rottmann.net:Naruto99"); break;
            case 6: mention.send ("land161@gmail.com:land161browny"); break;
            case 7: mention.send ("kudryashova.73@list.ru:Barsik2017"); break;
            case 8: mention.send ("borys.fromberg@gmail.com:cokolwiek10"); break;
            case 9: mention.send ("mikeviscariello@gmail.com:catdog22"); break;
            case 10: mention.send ("cona0804@mail.ru:lova_123"); break;
            case 11: mention.send ("michaeljosephpaul@gmail.com:5pinksox"); break;
            case 12: mention.send ("ozorniktv@gmail.com:arsenii2004"); break;
            case 13: mention.send ("maylistreseux@hotmail.fr:malili54"); break;
            case 14: mention.send ("saadrifton.11@hotmail.fr:oumaima12"); break;
            case 15: mention.send ("adnamfitra09@gmail.com:Naga290197"); break;
            case 16: mention.send ("zero_cull@hotmail.it:Computer10"); break;
            case 17: mention.send ("alex_karagounis@hotmail.com:1312akis"); break;
            case 18: mention.send ("mark.halsell@me.com:Bmw335im"); break;
            case 19: mention.send ("skyjake2013@mail.ru:valik2002"); break;
            case 20: mention.send ("aarranfwin@yahoo.co.uk:dude2425"); break;
            case 21: mention.send ("13eakers@gmail.com:6vial7vial"); break;
            case 22: mention.send ("christaylor1986@hotmail.co.uk:ta624106"); break;
            case 23: mention.send ("glynnfowler@gmail.com:cheese22"); break;
            case 24: mention.send ("guillaume.levene@hotmail.fr:gael0609"); break;
            case 25: mention.send ("tarpanelli@libero.it:Damiano2010"); break;
            case 26: mention.send ("mosiichuk.illia@yandex.ru:Star9080"); break;
            case 27: mention.send ("maqhusson@gmail.com:Samar123"); break;
            case 28: mention.send ("tom.thomson118@gmail.com:Cassis11"); break;
            case 29: mention.send ("adamr0@op.pl:Formula33"); break;
            case 30: mention.send ("wayne_musgrave@hotmail.co.uk:WordPa55"); break;
            case 31: mention.send ("wille.strid@hotmail.com:Google123"); break;
            case 32: mention.send ("keryna86@gmail.com:hyperion1"); break;
            case 33: mention.send ("jordileblanc@hotmail.com:joshua159"); break;
            case 34: mention.send ("piotr.lesniewski@onet.com.pl:piters12"); break;
            case 35: mention.send ("m.germosen0811@gmail.com:manu0811"); break;
            case 36: mention.send ("m.schwafertz@live.de:23LMRA8N"); break;
            case 37: mention.send ("dragon_quest64@hotmail.fr:Gob64mouch!!"); break;
            case 38: mention.send ("bjones@heritagehd.com:dylan413"); break;
            case 39: mention.send ("longchopstickz@gmail.com:chopsooey123"); break;
            case 40: mention.send ("ukas@baugherphotography.com:Incorrect21"); break;
            }
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (random2);
        embed = new discord.RichEmbed()
        .setDescription("I have successfully sent u the fortnite account ! Please cheack your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }
  
  if (msg.startsWith (prefix + "spotifygen") && message.member.hasPermission ("MANAGE_EMOJIS")) {
        number = 20;
        var random2 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random2) {
            case 1: mention.send ("sennette@gmail.com:texasexes2003"); break;
            case 2: mention.send ("msubills63@yahoo.com:Msdawg64"); break;
            case 3: mention.send ("aishwaryya.sarkar@gmail.com:lph23986769"); break;
            case 4: mention.send ("r1qwer1r@gmail.com:1qfghjo0"); break;
            case 5: mention.send ("bill_melendez@msn.com:ma9n0lia"); break;
            case 6: mention.send ("wgjames2@gmail.com:4808scar"); break;
            case 7: mention.send ("damiox@gmail.com:Riverplate"); break;
            case 8: mention.send ("gabrdz19@gmail.com:peewee18"); break;
            case 9: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 10: mention.send ("nikkicarlin@gmail.com:nikki1969"); break;
            case 11: mention.send ("kevincrozier@me.com:Lindzo29"); break;
            case 12: mention.send ("cheyannenikolaus@hotmail.com:chacha1987"); break;
            case 13: mention.send ("stegoego@gmail.com:Mamaego13142"); break;
            case 14: mention.send ("unreinmj@gmail.com:abbybell01"); break;
            case 15: mention.send ("tre9696@yahoo.com:Chsbears14"); break;
            case 16: mention.send ("bpodhajsky@yahoo.com:bentley123"); break;
            case 17: mention.send ("nachorq@hotmail.com:29580942"); break;
            case 18: mention.send ("brandon.berry01@gmail.com:volcom55"); break;
            case 19: mention.send ("etritsch84@gmail.com:jayhawks84"); break;
            case 20: mention.send ("adondevai@gmail.com:terapia123"); break;
            }
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (random2);
        embed = new discord.RichEmbed()
        .setDescription("I have successfully sent u the Spotify account ! Please cheack your DMs:thumbup:")
        .setColor("00FF00")
        message.channel.send(embed);
    }

    if (msg.startsWith ("!write")) {
        editedmessage = message.content.slice (6);

        client.msgs [message.author.username] = {
            message: editedmessage
        }
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message written!");
        });

    }

    if (msg.startsWith ("!get")) {
        let _message = client.msgs[message.author.username].message;
        message.channel.send ("" + _message);
    }


    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "nice")) {
              if (!message.member.hasPermission("ADMINISTRATOR"))  return;

              if (!args[1]) {

                     let embed3 = new discord.RichEmbed()
                         .setDescription(":white_check_mark: | Nice")
                           .setColor("#FF00FF")
                              message.channel.send (embed3);
                              message.delete();

                            } else {


                               let embed4 = new discord.RichEmbed()
                                                .setDescription(':white_check_mark: | Hello..')
                                                    .setColor("#99999")

                                                    message.channel.send (embed4);
                                          message.delete();
                }
              }
});


client.on('message', message => {
    if (message.content.split(' ')[0] == '!dm')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });




client.login(process.env.TOKENN);
