const discord = require ('discord.js');

 var client = new discord.Client();

 const cooldowns = new Set();

 const coolguy = new Set();


 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("cheacking 5 servers | !helpp");
     });

 const fs = require("fs");
 client.msgs = require ("./msgs.json");
 client.fortnite = require ("./fortnite.json");

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

 const prefix = "?";
 client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    let mention = message.mentions.users.first() || message.author

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (mentionMessage);
        message.channel.send ("Message has been sent!");
    }

    function cooldown(user, time) {
        cooldowns.add(user);
        setTimeout(() => cooldowns.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`U have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       message.channel.send (embed);
      }      

      function skanherooo(user, time) {
        coolguy.add(user);
        setTimeout(() => coolguy.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`U have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       .setThumbnail("https://cdn.discordapp.com/attachments/579732731710406657/580028507426652167/timmmeer.jpg")
       message.channel.send (embed);
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


        if (message.content.startsWith (prefix + "gen")) {
            let embdf = new discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Use This Command In (#normal-gen)`)
    let prm = new discord.RichEmbed()
    .setDescription("U Need To have (Normal Gen Access) To Run This Command!")
    .setColor("YELLOW")
    if (!message.member.roles.find(`name`, 'Normal Gen Access')) return message.channel.send(prm);
            if (message.channel.id !== '579795955667435521') return message.channel.send(embdf);
            if (message.author.bot || coolguy.has(message.author)) return
            var __message = client.fortnite.message;
            eee = new discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail('https://cdn.discordapp.com/attachments/579732731710406657/580025565332111369/ftttf.jpg')
            .setTitle("**__✅GENERATED FORTNITE ACCOUNT✅__**")
            .setDescription("**email:password** :"  + __message[Math.floor(Math.random() * __message.length)]);
        mention.send (eee);

            embed = new discord.RichEmbed ()
            .setDescription (`I Have Successfully Sent You The Fortnite Account! Please Check Your DMs:thumbup:`)
            .setColor ("#")
            .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(embed);
          skanherooo(message.author, 300);
            }


            if (message.content.startsWith (prefix + "pgen")) {
                let embdf = new discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Use This Command In (#premuim-gen)`)
        let prm = new discord.RichEmbed()
        .setDescription("U Need To Have (Premium Gen Access) To Run This Command!")
        .setColor("RED")
                if (!message.member.roles.find(`name`, 'Premium Gen Access')) return message.channel.send(prm);
                if (message.channel.id !== '579796017948393494') return message.channel.send(embdf);
                if (message.author.bot || cooldowns.has(message.author)) return
                var __message = client.fortnite.message;
                eee = new discord.RichEmbed()
                .setColor("RANDOM")
                .setThumbnail('https://cdn.discordapp.com/attachments/579732731710406657/580025565332111369/ftttf.jpg')
                .setTitle("**__✅GENERATED PREMUIM FORTNITE ACCOUNT✅__**")
                .setDescription("**email:password** :"  + __message[Math.floor(Math.random() * __message.length)]);
            mention.send (eee);
    
                embed = new discord.RichEmbed ()
                .setDescription (`I Have Successfully Sent You The Fortnite Account! Please Check Your DMs:thumbup:`)
                .setColor ("#")
                .setThumbnail(message.author.displayAvatarURL)
                message.channel.send(embed);
              cooldown(message.author, 180);
                }
            
           
    
    if (msg.startsWith ("?write")) {
         editedmessage = message.content.slice (6);

        client.msgs [message.author.username] = {
            message: editedmessage
        }
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message written!");
        });

    }
    if (msg.startsWith ("?restock")) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Please send the accounts ur going to restock below!...U Got 10 seconds..").then(r => r.delete(10000));
        message.channel.awaitMessages(filter, {
            max:1000,
            time: 10000
        }).then(collected => {

            if(collected.first().content === "cancel"){
                return message.reply("Canceled!");
            }

        if (message.channel.id !== '579732731710406657') return message.channel.send("**This Command Can Be Used Only In The Private Channel.**")
        editedmessagee = collected.first().content.split("\n");
        client.fortnite = {
            message: editedmessagee
        }
fs.writeFile ("./fortnite.json", JSON.stringify (client.fortnite, null, 4), err => {
            if (err) throw err;
            eeee = new discord.RichEmbed()
            .setDescription("__Added Accounts!__")
            .setColor("GREEN")
            message.channel.send (eeee);
        });
}).catch(err => {
    console.log(err)
})
    }



    if (msg.startsWith ("?get")) {
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
    if (message.content.split(' ')[0] == '?dm')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });
client.login(process.env.TOKENN);
