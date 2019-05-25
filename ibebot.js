const discord = require ('discord.js');

 var client = new discord.Client();

 const cooldowns = new Set();

 const coolguy = new Set();
 
 const somethingidk = new Set();


 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("cheacking 5 servers | !helpp");
     });

 const fs = require("fs");
 client.fortnite = require ("./fortnite.json");
 client.spotify = require ("./spotify.json");

 client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Members");
    member.addRole (role);

 })

 const prefix = "?";
 client.on ("message", (message) => {
    if (message.author.bot) return;
    let msg = message.content.toLowerCase();
    let mention = message.mentions.users.first() || message.author


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
      function somethingik(user, time) {
        somethingidk.add(user);
        setTimeout(() => somethingidk.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`U have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       .setThumbnail("https://cdn.discordapp.com/attachments/579732731710406657/580028507426652167/timmmeer.jpg")
       message.channel.send (embed);
      }      


        if (message.content.startsWith (prefix + "gen")) {
            let emdf = new discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Use This Command In (#normal-gen)`)
    let pr = new discord.RichEmbed()
    .setDescription("U Need To have (Normal Gen Access) To Run This Command!")
    .setColor("YELLOW")
    if (!message.member.roles.find(`name`, 'Normal Gen Access')) return message.channel.send(pr);
            if (message.channel.id !== '579795955667435521') return message.channel.send(emdf);
            if (message.author.bot || coolguy.has(message.author)) return
            var __message = client.fortnite.message;
            let numberofaccs = __message.length
            if (numberofaccs < 2) return message.channel.send("**__Out Of Stock.__**")
            let randomacc2 = (__message[Math.floor(Math.random() * numberofaccs)]);
            eee = new discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail('https://cdn.discordapp.com/attachments/579732731710406657/580025565332111369/ftttf.jpg')
            .setTitle("**__✅GENERATED FORTNITE ACCOUNT✅__**")
            .setDescription("**email:password** :"  + randomacc2);
        mention.send (eee);
            embed = new discord.RichEmbed ()
            .setDescription (`I Have Successfully Sent You The Fortnite Account! Please Check Your DMs:thumbup:`)
            .setColor ("#")
            .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(embed);
          skanherooo(message.author, 300);
            }
            if (message.content.startsWith (prefix + "pgen")) {
                let embdffff = new discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Use This Command In (#premuim-gen)`)
            let prmmmm = new discord.RichEmbed()
            .setDescription("U Need To have (Premium Gen Access) To Run This Command!")
            .setColor("YELLOW")
                if (!message.member.roles.find(`name`, 'Premium Gen Access')) return 
                message.channel.send(prmmmm);
                if (message.channel.id !== '579796017948393494') return 
                message.channel.send(embdffff);
                if (message.author.bot || cooldowns.has(message.author)) return      
                var __message = client.fortnite.message;
                let numberofaccss = __message.length
                if (numberofaccss < 2) return message.channel.send("**__Out Of Stock.__**");
                let randomacc = (__message[Math.floor(Math.random() * numberofaccss)]);
                eee = new discord.RichEmbed()
                .setColor("RANDOM")
                .setThumbnail('https://cdn.discordapp.com/attachments/579732731710406657/580025565332111369/ftttf.jpg')
                .setTitle("**__✅GENERATED PREMUIM FORTNITE ACCOUNT✅__**")
                .setDescription("**email:password** :"  + randomacc);
            mention.send (eee)
    
                embed = new discord.RichEmbed ()
                .setDescription (`I Have Successfully Sent You The Fortnite Account! Please Check Your DMs:thumbup:`)
                .setColor ("#")
                .setThumbnail(message.author.displayAvatarURL)
                message.channel.send(embed);
              cooldown(message.author, 180);
                }
    
                if (message.content.startsWith (prefix + "spotify")) {
                    let embdfffff = new discord.RichEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Use This Command In (#spotify-gen)`)
                    let prmmmmm = new discord.RichEmbed()
                    .setDescription("U Need To have (Spotify Gen Access) To Run This Command!")
                    .setColor("YELLOW")
            if (!message.member.roles.find(`name`, 'Spotify Gen Access')) return message.channel.send(prmmmmm);
                    if (message.channel.id !== '580531805791322133') return message.channel.send(embdfffff);
                    if (message.author.bot || somethingidk.has(message.author)) return
                    var __messagee = client.spotify.message;
                    let numberofaccsss = __messagee.length
                    if (numberofaccsss < 2) return message.channel.send("__**Out Of Stock.**__")
                    let randomaccc = (__message[Math.floor(Math.random() * numberofaccsss)]);
                    eee = new discord.RichEmbed()
                    .setColor("RANDOM")
                    .setThumbnail('https://cdn.discordapp.com/attachments/579732731710406657/580643845461770240/spo.png')
                    .setTitle("**__✅GENERATED SPOTIFY ACCOUNT✅__**")
                    .setDescription("**email:password** :"  + __messagee[Math.floor(Math.random() * randomaccc)]);
                mention.send (eee);
                    embed = new discord.RichEmbed ()
                    .setDescription (`I Have Successfully Sent You The Spotify Account! Please Check Your DMs:thumbup:`)
                    .setColor ("#")
                    .setThumbnail(message.author.displayAvatarURL)
                    message.channel.send(embed);
                  somethingik(message.author, 180);
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
    if (msg.startsWith ("?rspotify")) {
        const filter = m => m.author.id === message.author.id;
        message.reply("Please send the spotify accounts ur going to restock below!...U Got 10 seconds..").then(r => r.delete(10000));
        message.channel.awaitMessages(filter, {
            max:1000,
            time: 10000
        }).then(collected => {

            if(collected.first().content === "cancel"){
                return message.reply("Canceled!");
            }

        if (message.channel.id !== '579732731710406657') return message.channel.send("**This Command Can Be Used Only In The Private Channel.**")
        editedmessageee = collected.first().content.split("\n");
        client.spotify = {
            message: editedmessageee
        }
fs.writeFile ("./spotify.json", JSON.stringify (client.spotify, null, 4), err => {
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
