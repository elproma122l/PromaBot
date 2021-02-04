
const  Discord  =  require ( "discord.js" ) ,
  moment  =  require ( "momento" ) ,
  ms  =  require ( "ms" ) ,
  cliente  =  nueva  discordia . Cliente ( {
    ws : {  intenciones : Discord . Intenciones . TODOS  } ,
    disableMentions : "todos" ,
    parciales : [ "MESSAGE" ,  "CHANNEL" ,  "REACTION" ]
  } ) ,
  megadb  =  require ( "megadb" ) ,
  fetch  =  require ( "búsqueda de nodo" ) ,
  duration  =  require ( "humanizar-duración" ) ,
  hastebin  =  require ( "hastebin-save" ) ,
  advierte  =  nuevo  megadb . crearDB ( "advierte" ) ,
  token  =  "uwu" ,
  prefijo  =  "lc /" ,
  Jimp  =  require ( "jimp" ) ,
  figlet  =  require ( "figlet" ) ,
  niv  =  nuevo  megadb . crearDB ( "niveles" ) ,
  xp  =  nuevo  megadb . crearDB ( "experiencia" ) ,
  codes  =  require ( "códigos-rands" ) ;

cliente . francotiradores  =  nuevo  Mapa ( ) ;

const  { GiveawaysManager }  =  require ( "discord-giveaways" ) ;
cliente . giveawaysManager  =  new  GiveawaysManager ( cliente ,  {
  almacenamiento : "./database.json" ,
  updateCountdownEvery : 3000 ,
  predeterminado : {
    botsCanWin : falso ,
    embedColor : "# FF0000" ,
    reacción : "🎉"
  }
} ) ;

cliente . on ( "listo" ,  async  ( )  =>  {
  espera  consola . log ( cliente . usuario . etiqueta ) ;
  esperar al  cliente . usuario . setPresence ( {
    actividad : {
      nombre : "Ciudad Lunática |"  +  prefijo  +  "ayuda" ,
      tipo : "JUGANDO"
    } ,
      estado : "inactivo"
  } ) ;
} ) ;

client.on("message", async message => {
    
   { 
    let niveles = await niv.obtener(message.author.id);
    let exp = await xp.obtener(message.author.id);
    
    if(!niveles || !exp) { 
    	niv.establecer(message.author.id, 0);
        xp.establecer(message.author.id, 0)
    }
    
    let req = 300;
    
    if(exp >= req) {
        xp.establecer(message.author.id, 0);
        niv.sumar(message.author.id, 1);
        
        let kek = await client.channels.cache.get("784331718467256320");
        
        await kek.send(`╭━━━━━━━━╏<a:dogdance:784225781660385280>
│<a:pepedance:784327761199235132> ║Usuario: ${message.author}
│<a:pepepogs:784327406278148126> ║Nivel: ${niveles + 1}
╰━━━━━━━━╏<a:hypesqd:784225891252830218>`)
    } else {
        xp.sumar(message.author.id, Math.floor(Math.random() * 20) + 5)
    }
   };
    
    {
        let w = await warns.obtener(message.author.id);
        if(!w) warns.establecer(message.author.id, 0)
    }
    
    
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let command = args[0].toLowerCase();

  if (!message.content.toLowerCase().startsWith(prefix)) return;
  if (message.author.bot) return;
    
  try {

  if (command == "help") {
    if (!args[1]) {
      const embed = new Discord.MessageEmbed()
        .setTitle("Panel de ayuda de " + message.guild.name + " !!")
        .setDescription("Recuerda que cada comando empieza con `" + prefix + "` !")
        .addField(
          "<a:nono:784327326305222686> Moderación:",
          "`say`, `esay`, `kick`, `ban`, `mute`, `unmute`, `clear`, `backup create`, `backup info`,`backup load`, `gstart`, `gend`, `greroll`, `encuesta`, `warn`, `tempmute`, `tempban`, `addrole`, `remrole`, `nuke`"
        )
        .addField("<a:la_vecindad:801586336728875009> Diversión:", "`meme`, `chiste`, `8ball`, `love`, `ascii`, `nitro`, `trump`, `clyde`, `ppt`, `buscaminas`, `bigtext`")
        .addField(
          "<a:N_Yes:801587375653781515> Servidor:",
          "`sugerencia`, `reporte`, `confession`"
        )
        .addField(
          "<a:CH_carrow:801586919368556585> Info:",
          "`owner-bot`, `serverinfo`, `ping`, `snipe`, `servericon`, `ping`, `lindo`, `charcount`, `userinfo`, `structure`"
        )
        .addField(
          "<a:CH_carrow:801586919368556585> Links:",
          "[**Discord**](https://discord.gg/4qpZb9AC95)"
        )
        .setColor("RANDOM")

      message.channel.send(embed);
    } else {
      let ayuda;
      let ayuda2;
      if (args[1] == "say") {
        ayuda = "Say";
        ayuda2 =
          "El bot dice lo que tu dices\nUso: `dc/say (mensaje)`\nPermisos necesarios: **Gestionar mensajes**";
      } else if (args[1] == "esay") {
        ayuda = "Esay";
        ayuda2 =
          "El bot dice lo que tu dices en un embed\nUso: `dc/esay ( titulo / descripcion / color / imagen / pie / imagen de pie)`\nPermisos necesarios: **Gestionar mensajes**";
      } else if (args[1] == "kick") {
        ayuda = "Kick";
        ayuda2 =
          "Expulsas a alguien\nUso: `dc/kick (@user) (razon [opcional])\nPermisos necesarios: **Expulsar miembros**";
      } else if (args[1] == "ban") {
        ayuda = "Ban";
        ayuda2 =
          "Baneas a alguien\nUso: `dc/ban (@user) (razon [opcional])\nPermisos necesarios: **Banear miembros**";
      } else if (args[1] == "mute") {
        ayuda = "Mute";
        ayuda2 =
          "Muteas a alguien\nUso: `dc/mute (@user) (razon [opcional])`\nPermisos necesarios: **Gestionar roles**";
      } else if (args[1] == "unmute") {
        ayuda = "Unmute";
        ayuda2 =
          "Desmuteas a alguien\nUso: `dc/unmute (@user) (razon [opcional])`\nPermisos necesarios: **Gestionar roles**";
      } else if (args[1] == "clear") {
        ayuda = "Clear";
        ayuda2 =
          "Borra mensajes\nUso: `dc/clear (numero)`\nPermisos necesarios: **Gestionar mensajes**";
      } else if (args[1] == "backup") {
        if (args[2] == "create") {
          ayuda = "Backups - Create";
          ayuda2 =
            "Creas un backup\nUso: `Ninguno`\nPermisos necesarios: **Administrador**";
        }
        if (args[2] == "info") {
          ayuda = "Backups - Info";
          ayuda2 =
            "Mira información de un backup\nUso: `dc/backup info (ID de backup)`\nPermisos necesarios: **Ninguno**";
        }
        if (args[2] == "load") {
          ayuda = "Backups - Load";
          ayuda2 =
            "Carga un backup creado anteriormente\nUso: `dc/backup load (ID de backup)`\nPermisos necesarios: **Administrador**";
        }
      } else if (args[1] == "gstart") {
        ayuda = "Giveaways - Start";
        ayuda2 =
          "Comienza un giveaway\nUso: `dc/giveaway start ( #canal / duracion / ganadores / premio )`\nPermisos necesarios: **Gestionar mensajes**";
      }
     else if (args[1] == "gend") {
        ayuda = "Giveaways - End";
        ayuda2 =
          "Termina un giveaway\nUso: `dc/giveaway end (ID del giveaway)`\nPermisos necesarios: **Gestionar mensajes**";
      }
      else if (args[1] == "greroll") {
        ayuda = "Giveaways - Reroll";
        ayuda2 =
          "Rerollea un giveaway\nUso: `dc/giveaway reroll (ID del giveaway)`\nPermisos necesarios: **Gestionar mensajes**";
      } else if (args[1] == "encuesta") {
        ayuda = "Encuesta";
        ayuda2 =
          "Crea una encuesta\nUso: `dc/encuesta (pregunta / opcion1 / opcion2 / opcion3 [opcional] / opcion4 [opcional] / opcion5 [opcional])`\nPermisos necesarios: **Gestionar mensajes**";
      } else if (args[1] == "meme") {
        ayuda = "Meme";
        ayuda2 =
          "Mira un meme\nUso: `Ninguno`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "chiste") {
        ayuda = "Chiste";
        ayuda2 =
          "Mira un chiste\nUso: `Ninguno`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "new") {
        ayuda = "New";
        ayuda2 =
          "Crea un ticket para tener ayuda\nUso: `Ninguno`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "sugerencia") {
        ayuda = "Sugerencia";
        ayuda2 =
          "Sugiere algo para el servidor!\nUso: `dc/sugerencia (tu sugerencia)`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "reporte") {
        ayuda = "Reporte";
        ayuda2 =
          "Reporta a alguien\nUso: `dc/reporte (@user) (reporte)`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "confession") {
        ayuda = "Confesion";
        ayuda2 =
          "Confiesa algo\nUso: `dc/confession (confesion)`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "avatar") {
        ayuda = "Avatar";
        ayuda2 =
          "Mira el avatar de alguien!\nUso: `dc/avatar (@user [opcional])`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "skin") {
        ayuda = "Skin";
        ayuda2 =
          "Mira la skin de alguien!\nUso: `dc/skin (nick de MC)`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "owner-bot") {
        ayuda = "Owner bot";
        ayuda2 =
          "Mira el owner del bot!\nUso: `Ninguno`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "help") {
        ayuda = "Help";
        ayuda2 =
          "Muestra todos los comandos\nUso: `dc/help (opcional comando)`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "close") {
        ayuda = "Close";
        ayuda2 =
          "Cierra un ticket\nUso: `Ninguno`\nPermisos necesarios: **Ninguno**";
      } else if (args[1] == "warn") {
        ayuda = "Warn";
        ayuda2 =
          "Advierte a un usuario\nUso: `dc/warn (@user)`\nPermisos necesarios: **Expulsar miembros**";
      } else if (args[1] == "tempmute") {
        ayuda = "Tempmute";
        ayuda2 =
          "Mutea a alguien por un tiempo determinado\nUso: `dc/tempmute (@user) (tiempo)`\nPermisos necesarios: **Gestionar roles**";
      } else if (args[1] == "tempban") {
        ayuda = "Tempban";
        ayuda2 =
          "Banea a alguien por un tiempo determinado\nUso: `dc/tempban (@user) (tiempo)`\nPermisos necesarios: **Banear miembros**";
      } else {
        ayuda = "?";
        ayuda2 = "Comando desconocido";
      }

      const e = new Discord.MessageEmbed()
        .setTitle("Ayuda del comando: " + ayuda)
        .setDescription(ayuda2)
        .setColor("RANDOM");
    }
  }

  if (command == "say") {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de gestionar mensajes!"
      );
    let mensaje = args.slice(1).join(" ");
    if (!mensaje)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Especifica el mensaje"
      );
    message.delete();
    message.channel.send(mensaje);
  }
  if (command == "esay") {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de gestionar mensajes!"
      );
    let split = args.slice(1).join(" ");
    if (!split)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas poner por lo menos el titulo, separa con `|`"
      );
    split = split.split("|");
    message.delete();
    const [title, desc, col, img, f, ft] = split;
    if (title && !desc) {
      message.channel.send(new Discord.MessageEmbed().setTitle(title));
    }
    if (desc && !col) {
      message.channel.send(
        new Discord.MessageEmbed().setTitle(title).setDescription(desc)
      );
    }
    if (col && !img) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(title)
          .setDescription(desc)
          .setColor(col)
      );
    }
    if (img && !f) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(title)
          .setDescription(desc)
          .setColor(col)
          .setFooter(f)
      );
    }
    if (f && !ft) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(title)
          .setDescription(desc)
          .setColor(col)
          .setFooter(f)
      );
    }
    if (ft) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(title)
          .setDescription(desc)
          .setColor(col)
          .setFooter(f, ft)
      );
    }
  }
  if (command === "gstart") {
    if (
      !message.member.permissions.has("MANAGE_MESSAGES")
    )
      return message.channel.send("Necesitas permisos de gestionar mensajes");

    let giveawayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]);
    if (!giveawayChannel) return message.channel.send("Menciona algun canal");

    let giveawayDuration = args[2];
    if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
      return message.channel.send("Escribe alguna duracion");
    }
    let giveawayNumberWinners = args[3];
    if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0)
      return message.channel.send("Especifica los ganadores");

    let giveawayPrize = args.slice(4).join(" ");
    if (!giveawayPrize) {
      return message.channel.send("Escribe el premio");
    }
    client.giveawaysManager.start(giveawayChannel, {
      time: ms(giveawayDuration),
      prize: giveawayPrize,
      winnerCount: giveawayNumberWinners,
      hostedBy: message.author,
      messages: {
        giveaway: "🎉 **GIVEAWAY** 🎉",
        giveawayEnded: "🎉 **GIVEAWAY TERMINADO** 🎉",
        timeRemaining: "Tiempo restante: **{duration}**!",
        inviteToParticipate: "Reacciona a 🎉 para participar!",
        winMessage: "Felicitaciones: {winners}! Has ganado **{prize}**!",
        embedFooter: "Giveaways",
        noWinner: "Un ganador no pudo ser determinado!",
        hostedBy: "Hecho por: {user}",
        winners: "Ganador(es)",
        endedAt: "Terminó el",
        units: {
          seconds: "segundos",
          minutes: "minutos",
          hours: "horas",
          days: "días",
          pluralS: false
        }
      }
    });

    message.channel.send(`Giveaway comenzado en <#${giveawayChannel.id}> !`);
  }
  if (command === "gend") {
    if (
      !message.member.permissions.has("MANAGE_MESSAGES")
    )
      return message.channel.send("Necesitas permisos de gestionar mensajes");
    if (!args[1])
      return message.channel.send("Especifica el mensaje ID del giveaway");
    let giveaway =
      client.giveawaysManager.giveaways.find(
        g => g.prize === args.slice(1).join(" ")
      ) ||
      // Search with giveaway ID
      client.giveawaysManager.giveaways.find(g => g.messageID === args[1]);

    // If no giveaway was found
    if (!giveaway)
      return message.channel.send(
        "No encontré el giveaway: `" + args.slice(1).join(" ") + "`."
      );

    // Edit the giveaway
    client.giveawaysManager
      .edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
      })
      // Success message
      .then(() => {
        // Success message
        message.channel.send(
          "El giveaway terminará en " +
            client.giveawaysManager.options.updateCountdownEvery / 1000 +
            " segundos!"
        );
      })
      .catch(e => {
        if (
          e.startsWith(
            `Giveaway with message ID ${giveaway.messageID} is already ended.`
          )
        ) {
          message.channel.send("El giveaway ya había terminado!");
        } else {
          console.error(e);
          message.channel.send(
            `:x: \`|\` Ha ocurrido un error desconocido: **\`\`\`js\n${e}\`\`\`** `
          );
        }
      });
  }
  if (command === "greroll") {
    if (
      !message.member.permissions.has("MANAGE_MESSAGES") &&
      message.author.id != "577910853190287391"
    )
      return message.channel.send("Necesitas permisos de gestionar mensajes");
    if (!args[1]) return message.channel.send("Especifica un mensaje ID");

    let giveaway =
      (await client.giveawaysManager.giveaways.find(
        g => g.prize === args.slice(1).join(" ")
      )) ||
      // Search with giveaway ID
      (await client.giveawaysManager.giveaways.find(
        g => g.messageID === args[1]
      ));

    // If no giveaway was found
    if (!giveaway)
      return message.channel.send(
        "No encontré el giveaway: `" + args.slice(1).join(" ") + "`."
      );

    // Reroll the giveaway
    client.giveawaysManager
      .reroll(giveaway.messageID)
      .then(() => {
        // Success message
        message.channel.send("Sorteo rerolleado!");
      })
      .catch(e => {
        if (
          e.startsWith(
            `Giveaway with message ID ${giveaway.messageID} is not ended.`
          )
        ) {
          message.channel.send(
            "El giveaway todavía no termino! Para terminarlo usa **" +
              prefix +
              "gend " +
              giveaway.messageID +
              "**"
          );
        } else {
          console.error(e);
          message.channel.send(
            `:x: \`|\` Ha ocurrido un error desconocido: **\`\`\`js\n${e}\`\`\`** `
          );
        }
      });
  }
  if (command == "kick") {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de expulsar miembros"
      );
    let persona =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]);
    if (!persona)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Menciona a la persona"
      );
    if (
      persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0
    )
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` No puedes expulsar a alguien con un rol mayor al tuyo"
      );
      if(persona == message.member) return message.channel.send("No puedes expulsarte a vos mismo");
    let razon = args.slice(2).join(" ");
    if (!razon) razon = "Razon no provista";

    message.guild.member(persona).kick(message.author.tag + ": " + razon);
    message.channel.send(
      `<a:N_Yes:801587375653781515> ${persona.displayName} explusado, razón: ${razon}`
    );
      client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${persona}
**-> Razón**
${razon}
**-> Tipo de sanción**
Kick
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )
  }
  if (command == "ban") {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de banear miembros"
      );
    let persona =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]);
    if (!persona)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Menciona a la persona"
      );
    if (
      persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0
    )
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` No puedes banear a alguien con un rol mayor al tuyo"
      );
      if(persona == message.member) return message.channel.send("No puedes banearte a vos mismo")
    let razon = args.slice(1).join(" ");
    if (!razon) razon = "Razon no provista";

    persona.ban({ reason: message.author.tag + ": " + razon });

    message.channel.send(
      `<a:N_Yes:801587375653781515> ${persona.displayName} baneado, razón: ${razon}`
    );
      client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${persona}
**-> Razón**
${razon}
**-> Tipo de sanción**
Ban
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )
      
  }
  if (command == "mute") {
    if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de gestionar roles!"
      );

    let miembro =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]);

    if (!miembro)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Debes mencionar al miembro!"
      );

    if (miembro.roles.cache.has("784453919597395989"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` El usuario ya esta muteado!"
      );

    await miembro.roles.add("784453919597395989");
    message.channel.send(
      `<a:N_Yes:801587375653781515> \`|\` **${miembro.displayName}** se ha muteado correctamente!`
    );
      client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${miembro}
**-> Razón**
${args.slice(2).join(" ") || "No provista"}
**-> Tipo de sanción**
Mute
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )
  }
  if (command === "unmute") {
    if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de gestionar roles!"
      );

    let miembro =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]);

    if (!miembro)
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` Debes mencionar al miembro!"
      );

    if (!miembro.roles.cache.has("784453919597395989"))
      return message.channel.send(
        "<a:CH_voteno:801587488594067466> `|` El usuario no estaba muteado!"
      );

    miembro.roles.remove("784453919597395989");
    message.channel.send(
      `<a:N_Yes:801587375653781515> \`|\` **${miembro.displayName}** se ha desmuteado correctamente!`
    );
      client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${miembro}
**-> Razón**
${args.slice(2).join(" ") || "No provista"}
**-> Tipo de sanción**
Unmute
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )
  }
  if (command === "clear") {
    const monto = args.slice(1).join(" ");

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply(
        "<a:CH_voteno:801587488594067466> `|` Necesitas permisos de gestionar mensajes!"
      );

    if (!monto)
      return message.reply(
        "<a:CH_voteno:801587488594067466> `|` Selecciona el número de mensajes a borrar."
      );

    if (monto > 100)
      return message.reply(
        "<a:CH_voteno:801587488594067466> `|` No puedes borrar más de 100 mensajes."
      );

    if (monto < 1)
      return message.reply(
        "<a:CH_voteno:801587488594067466> `|` No puedes borrar menos de 1 mensaje"
      );

    if (isNaN(monto))
      return message.reply(
        "Ese no es un número!"
      );

    message.channel.send(`Borrando ${monto} mensajes...`).then(m => {
      message.channel.bulkDelete(monto);
      m.edit(
        "<a:Exito:792018446517796875> `|` Borrados " + monto + " mensajes!"
      );
    });
  }
  if (command == "reporte") {
    let miembro =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]),
      reporte = args.slice(2).join(" ");

    if (!miembro)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Menciona al reportado"
      );
    if (!reporte)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Escribe el reporte"
      );
    client.channels.cache.get("803631004258533468").send(
      new Discord.MessageEmbed()
        .setTitle(":rotating_light: REPORTE NUEVO :rotating_light:")
        .addField("Autor", message.author.tag)
        .addField("Reportado", miembro.user.tag)
        .addField("Reporte", reporte)
        .setColor("#ff0000")
    );
    message.channel.send("Reporte enviado!");
  }
  if (command == "confession") {
    let msg = args.slice(1).join(" ");
    if (!msg)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Especifica la confesión!"
      );
    message.delete();
    client.channels.cache.get("803631375315238912").send(
      new Discord.MessageEmbed()
        .setTitle("Confesión :flushed:")
        .setAuthor("Anonymous#0000")
        .setDescription(msg)
        .setColor("RANDOM")
    );
  }
  if (command == "meme") {
    const { randomMemeImagen } = require("discordimgs");
    const embed = new Discord.MessageEmbed()
      .setTitle("Meme :joy:")
      .setImage(randomMemeImagen())
      .setColor("RANDOM");
    message.channel.send(embed);
  }
  if (command == "encuesta") {
    const split = args
      .slice(1)
      .join(" ")
      .split("/");

    const poll = new Discord.MessageEmbed()
      .setTitle("📊 Encuesta!")
      .setDescription("**" + split[0] + "**")
      .addField(":one: Opción 1", "**" + split[1] + "**")
      .addField(":two: Opción 2", "**" + split[2] + "**")
      .setColor("BLUE")
      .setFooter(
        "Encuesta por " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();

    let canal = await client.channels.cache.get("782981840256368651");

    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.reply("Necesitas permisos de gestionar servidor");
    if (!split[2])
      return message.reply(
        "<a:Mal:792018568006729728> `|` Uso: `" +
          prefix +
          "encuesta (pregunta / opcion1 / opcion2 / opcion3 [opcional] / opcion4 [opcional] / opcion5 [opcional])`"
      );
    if (split[3])
      poll.addField(":three: Tercera opción", "**" + split[4] + "**");
    if (split[4]) poll.addField(":four: Cuarta option", "**" + split[5] + "**");
    if (split[5]) poll.addField(":five: Quinta opción", "**" + split[6] + "**");

    if (split[6])
      return message.reply(
        "<a:Mal:792018568006729728> `|` Demasiadas opciones"
      );

    if (!split[3])
      canal.send(poll).then(async function(message) {
        message.react("1️⃣");
        message.react("2️⃣");
      });
    else if (!split[4])
      canal.send(poll).then(async function(message) {
        message.react("1️⃣");
        message.react("2️⃣");
        message.react("3️⃣");
      });
    else if (!split[5])
      canal.send(poll).then(async function(message) {
        message.react("1️⃣");
        message.react("2️⃣");
        message.react("3️⃣");
        message.react("4️⃣");
      });
    else if (!split[6])
      canal.send(poll).then(async function(message) {
        message.react("1️⃣");
        message.react("2️⃣");
        message.react("3️⃣");
        message.react("4️⃣");
        message.react("5️⃣");
      });
  }
  switch(command) {
      case "new":
    let canal = await message.guild.channels.create(
      `ticket-${message.author.discriminator}`,
      {
        type: "text",
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone,
            allow: [],
            deny: ["VIEW_CHANNEL"]
          },
          {
            id: message.author.id,
            allow: [
              "VIEW_CHANNEL",
              "SEND_MESSAGES",
              "ADD_REACTIONS",
              "ATTACH_FILES",
              "EMBED_LINKS",
              "USE_EXTERNAL_EMOJIS"
            ],
            deny: ["MANAGE_MESSAGES", "MENTION_EVERYONE", "MANAGE_CHANNELS"]
          }
        ]
      }
    );
    message.channel.send(
      "<a:Exito:792018446517796875> | Tu ticket fue creado en <#" +
        canal.id +
        ">"
    );
    let msg = await canal.send(
      `<@&803280173012221992> <@${message.author.id}> Necesita ayuda!`,
      new Discord.MessageEmbed()
        .setTitle("Nuevo ticket")
        .setDescription(
          "Muchas gracias por crear un ticket!\nPor favor cuentanos tu problema, el staff te responderá lo mas rapido posible!\nReacciona con :lock: Para cerrar el ticket"
        )

        .setColor("ff0000")
    );
    await msg.react("🔒");
    await msg.awaitReactions(async (reaction, user) => {
      if (reaction.emoji.name === "🔒") {
        canal.send(
          "<a:Exito:792018446517796875> `|` El ticket será cerrado en 5 segundos!"
        );
        setTimeout(() => {
          canal.delete();
        }, ms("5s"));
      }
    });
   break;
      case "close":
      if (
      !message.channel.name.startsWith("ticket-") &&
      !message.member.permissions.has("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Este canal no es un ticket!"
      );

    message.channel.send("El ticket será cerrado en 5 segundos!");
    setTimeout(() => {
      message.channel.delete();
    }, ms("5s"));
          break;
  }
  if (command === "sugerencia") {
    let sugerencia = args.slice(1).join(" ");
    if (!sugerencia)
      return message.channel.send(
        "Escribe la sugerencia"
      );
    let canal = await client.channels.cache.get("803662322798559292");
    let msg = await canal.send(
      new Discord.MessageEmbed()
        .setTitle("Nueva sugerencia")
        .setDescription(sugerencia)
        .setFooter("✅ = Aprobado || ❌ = Rechazado")
        .setColor("ff0000")
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
    );
    await msg.react("⬆️");
    await msg.react("⬇️");
  }
  if (command == "chiste") {
    let xd = await fetch("https://risapi.bacanoicua.tk/");
    let owo = await xd.json();
    const embed = new Discord.MessageEmbed()
      .setTitle("Chiste :joy:")
      .setDescription(owo.chiste)
      .setColor("RANDOM");
    message.channel.send(embed);
  }
  if (command == "avatar") {
    let m =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]) ||
      message.member;
    let avatar = m.user.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 4096
    });
    const av = new Discord.MessageEmbed()
      .setTitle("Avatar de " + m.displayName)
      .setImage(avatar)
      .setDescription("[Avatar URL](" + avatar + ")")
      .setColor("RANDOM");
    message.channel.send(av);
  }
  if (command == "skin") {
    let skin = args.slice(1).join(" "); //Nombre de la skin

    if (!args[1])
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Dime el nombre de una skin"
      ); //Esto enviara un mensaje si no se envió el nombre de la skin

    let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`; //Esto sera la imagen de la skin

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("`Skin nick:` " + skin + "")
      .setImage(url);

    message.channel.send(embed);
  }
  if (command == "owner-bot") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Owner del bot!")
      .setDescription(
        "Mi creador es: **! PEPE#8888 [761404868460019732]**\n\nUn gran desarollador de bots y programador, denle las gracias a el por crearme y divertirte conmigo! ;)"
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  }
  if (command == "warn") {
    if (
      !message.member.permissions.has("KICK_MEMBERS") ||
      !message.member.permissions.has("BAN_MEMBERS")
    )
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` No tienes permisos de expulsar miembros y de banear miembros!"
      );
    let miembro =
      message.mentions.users.first() || client.users.resolve(args[1]);
    if (!miembro)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Necesitas mencionar al usuario"
      );
    warns.sumar(miembro.id, 1);
    message.channel.send(
      "<a:Exito:792018446517796875> `|` **" +
        miembro.tag +
        "** se ha advertido\nAdvertencias: " +
        (await warns.obtener(miembro.id))
    );
    client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${miembro}
**-> Razón**
${args.slice(2).join(" ") || "No provista"}
**-> Tipo de sanción**
Warn
**-> Sancionado por**
${message.author}
**-> Cantidad de warns**
${(await warns.obtener(miembro.id))}
`)
          .setColor("RED")
   )
  }
  if (command == "tempban") {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      //Si no tiene permisos retorna
      return message.reply(
        "<a:Mal:792018568006729728> `|` No tienes permisos de banear miembros"
      );

    let member = message.guild.member(
      message.mentions.users.first() || client.users.cache.get(args[1])
      //Definimos member para la mencion
    );

    if (!member)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Por favor menciona al usuario."
      );
    let embedMember = new Discord.MessageEmbed();
    let time = args[2]; //Definimos el tiempo usando args, esto tomara el segundo argumento del mensaje
    if (!time)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Por favor agrega el tiempo para banear al usuario."
      );
    let timer = ms(time); //uso esto para que envie el tiempo en minutos, segundos, etc...

    let embedBan = new Discord.MessageEmbed()
      .setTitle(`TempBan`)
      .addField("Moderador", `<@${message.author.id}>`)
      .addField("Usuario", `<@${member.id}>`)
      .addField("Tiempo", duration(timer))
      .setColor("#00eaff");

    await message.channel //Hacemos un await para enviar el embed del baneo y un catch por si ocurrio un error
      .send({ embed: embedBan });

    await member.ban({ reason: args.slice(2).join(" ") || "Sin razon" });
      
      await client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${member}
**-> Razón**
${args.slice(2).join(" ") || "No provista"}
**-> Tipo de sanción**
Tempban
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )

    await setTimeout(async function() {
      await message.guild.members.unban(member.id);

      let embedUnBan = new Discord.MessageEmbed()
        .setTitle(`Tempban terminado`)
        .addField("Moderador", `<@${message.author.id}>`, true)
        .addField("Usuario", `<@${member.id}>`, true)
        .setTimestamp()
        .setColor("#ffa9a9");

      await message.channel.send({ embed: embedUnBan }); //enviamos el embed de desbaneo
    }, timer);
  }
  if (command == "tempmute") {
    if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.reply(
        "<a:Mal:792018568006729728> `|` No tienes permisos de gestionar roles"
      );

    let member = message.guild.member(
      message.mentions.users.first() || client.users.cache.get(args[0])
      //Definimos member para la mencion
    );

    if (!member)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Por favor menciona al usuario."
      );
    let embedMember = new Discord.MessageEmbed();
    let time = args[2]; //Definimos el tiempo usando args, esto tomara el segundo argumento del mensaje
    if (!time)
      return message.channel.send(
        "<a:Mal:792018568006729728> `|` Por favor agrega el tiempo para mutear al usuario."
      );
    let timer = ms(time); //uso esto para que envie el tiempo en minutos, segundos, etc...

    let embedBan = new Discord.MessageEmbed()
      .setTitle(`Tempmute`)
      .addField("Moderador", `<@${message.author.id}>`)
      .addField("Usuario", `<@${member.id}>`)
      .addField("Tiempo", duration(timer))
      .setColor("#00eaff");

    await message.channel //Hacemos un await para enviar el embed del baneo y un catch por si ocurrio un error
      .send({ embed: embedBan });

    await member.roles.add("784453919597395989");
      
      await client.channels.cache.get("802978398136827944").send(
          new Discord.MessageEmbed()
          .setTitle("[!] Sanciones")
          .setDescription(`**-> Usuario sancionado**
${member}
**-> Razón**
${args.slice(2).join(" ") || "No provista"}
**-> Tipo de sanción**
Tempmute
**-> Sancionado por**
${message.author}
`)
          .setColor("RED")
   )

    await setTimeout(async function() {
      await member.roles.remove("784453919597395989");

      let embedUnBan = new Discord.MessageEmbed()
        .setTitle(`Tempmute terminado`)
        .addField("Moderador", `<@${message.author.id}>`, true)
        .addField("Usuario", `<@${member.id}>`, true)
        .setTimestamp()
        .setColor("#ffa9a9");

      await message.channel.send({ embed: embedUnBan }); //enviamos el embed de desbaneo
    }, timer);
  }
  if (command == "backup") {
      const backup = require("discord-backup");
      backup.setStorageFolder("./backups/");

      if (args[1] === "create") {
        if (!message.member.permissions.has("ADMINISTRATOR"))
          return message.channel.send(
            "No puedes usar este comando necesitas permisos de administrador"
          );
        backup
          .create(message.guild, {
            jsonBeautify: true
          })
          .then(backupData => {
            message.author.send(
              new Discord.MessageEmbed()
                .setAuthor(`🔒 Backup creado 🔒`)
                .setColor(message.guild.me.displayHexColor)
                .setDescription(
                  `Para cargarlo, usa ${prefix}backup load ${backupData.id}`
                )
                .setThumbnail(message.author.displayAvatarURL())
            );

            message.channel
              .send(
                new Discord.MessageEmbed()
                  .setAuthor(`🔒 Backup creado 🔒`)
                  .setColor(message.guild.me.displayHexColor)
                  .setThumbnail(message.author.displayAvatarURL())
                  .setDescription("**La ID de la backup fue enviado al MD**")
              )
              .catch(err => {
                const error = new Discord.MessageEmbed()
                  .setTitle("Ups")
                  .setDescription("No pude enviarte el code a tu MD")
                  .addField(
                    "Uso del backup",
                    "Para cargar el backup usa " +
                      prefix +
                      "backup load " +
                      backupData.id
                  )
                  .setColor("#ff0000");
                message.channel.send(error);
              });
          });
      } else if (args[1] === "info") {
        let backupID = args[2];
        if (!backupID)
          return message.channel.send(
            ":x: | Necesitas especificar un ID de backup!"
          );

        // Fetch the backup
        backup
          .fetch(backupID)
          .then(backupInfos => {
            let embed = new Discord.MessageEmbed();
            moment.updateLocale("es", {
              months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
                "_"
              ),
              monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
                "_"
              ),
              weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split(
                "_"
              ),
              weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
              weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
            }); // ponemos los dias en español
            moment.locale("es");
            embed
              .setAuthor("Info de la backup")
              // Display the backup ID
              .addField("Backup ID", backupInfos.id, false)
              // Displays the server from which this backup comes
              .addField("Server ID", backupInfos.data.guildID, false)
              // Display the size (in mb) of the backup
              .addField("Tamaño", `${backupInfos.size} MB`, false)
              // Display when the backup was created
              .addField(
                "Creado el",
                moment.utc(backupInfos.data.createdTimestamp).format("LLLL"),
                false
              )
              .setColor("#FF0000");
            message.channel.send(embed);
          })
          .catch(err => {
            return message.channel.send(
              ":x: | No fue encontrada una backup con la ID `" + backupID + "`!"
            );
          });
      } else if (args[1] === "load") {
        let backupID = args[2];
        if (!backupID)
          return message.channel.send(
            ":x: | Necesitas especificar un ID de backup!"
          );

        backup.fetch(backupID).then(async () => {
          message.channel
            .send(
              ":warning: | Cuando cargue el backup, todos los canales y roles cambiaran! Estas seguro? Esta accion no se puede deshacer"
            )
            .then(m => {
              m.react("✅");
              const filtro = (reaction, user) => {
                return (
                  ["✅"].includes(reaction.emoji.name) &&
                  user.id == message.author.id
                );
              };
              m.awaitReactions(filtro, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
                .catch(() => {
                  m.edit(":x: | El tiempo se ha acabado, comando cancelado");
                })
                .then(coleccionado => {
                  const reaccion = coleccionado.first();

                  backup
                    .load(backupID, message.guild)
                    .then(() => {
                      backup.remove(backupID);
                    })
                    .catch(err => {
                      return message.author.send(
                        ":x: | Un error ha ocurrido, por favor checkea que tenga permisos de administrador!"
                      );
                    });
                });
            });
        });
      }
    
  }
  if (command == "snipe") {
    let canal =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]) ||
      message.channel;
    let msg = await client.snipes.get(canal.id);
    if (!msg) return message.channel.send("No se ha borrado ningun mensaje");
    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.delete.tag, msg.delete.displayAvatarURL({ dynamic: true }))
      .setDescription(msg.content)
      .setColor("ff0000");
    if (msg.image) embed.setImage(msg.image);
    message.channel.send(embed);
  }
  if (command == "yt") {
    message.channel.send(
      new Discord.MessageEmbed().setTitle("Requisitos YT")
        .setDescription(`:clapper:┋MiniYT 100 subs + Review + 1 video al mes en el server
:clapper:┋Youtuber 350 subs + review +1 Video al mes en el server
:clapper:┋Famoso 1k subs + review + 1 video al mes en el server
:sweat_drops:┋Partner 5k + review + 1 video al mes en el server
:clapper:┋Streamer 700 seguidores en twich + Directos en el server`)
    );
  }
  if (command == "report-bug") {
    let bug = args.slice(1).join(" ");
    if (!bug) return message.channel.send("¿Qué bug tengo?");
    client.channels.cache.get("792888296622522378").send(
      new Discord.MessageEmbed()
        .setTitle("Nuevo bug!")
        .addField("Autor", message.author.tag)
        .addField("Bug", bug)
        .setColor("ff0000")
    );
  }
  if (command === "eval" || command == "e") {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    async function enviar(mensaje) {
      return await message.channel.send(mensaje);
    }

    async function exec(codigo) {
      return await require("child_process").execSync(codigo);
    }

    function mayuscula(string) {
      if (string == "undefined") return undefined;
      else {
        string = string.replace(/[^a-z]/gi, "");

        return string[0].toUpperCase() + string.slice(1);
      }
    }
    try {
      let code = args.slice(1).join(" ");
      let evalued = await eval(code);
      let tipo = typeof evalued || "Tipo no encontrado.";
      if (typeof evalued !== "string")
        evalued = require("util").inspect(evalued, {
          depth: 0,
          maxStringLength: 2000
        });
      let txt = "" + evalued;
      if (txt.length > 1024) {
        hastebin.upload(
          `- - - - Eval - - - -\n\n${txt.replace(
            client.token,
            "Wow, un token"
          )}`,
          async link => {
            const embed = new Discord.MessageEmbed()
              .addField(
                ":inbox_tray: Entrada",
                `\`\`\`js\n${code.length > 1024 ? "Mucho texto" : code}\n\`\`\``
              )
              .addField(
                ":outbox_tray: Salida",
                `\`El codigo es muy largo, link:\` https://hastebin.com/${link}.js`
              )
              .addField(
                ":file_folder: Tipo",
                `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``,
                true
              )
              .addField(
                ":stopwatch: Tiempo",
                `\`\`\`fix\n${Math.floor(
                  Date.now() - message.createdTimestamp
                )}ms\n\`\`\``,
                true
              )
              .setColor("#7289DA");
            await message.channel.send(embed);
          }
        );
      } else {
        const embed = new Discord.MessageEmbed()
          .addField(
            ":inbox_tray: Entrada",
            `\`\`\`js\n${code.length > 1024 ? "Mucho texto" : code}\n\`\`\``
          )
          .addField(
            ":outbox_tray: Salida",
            `\`\`\`js\n${txt.replace(
              client.token,
              "No quieres saber eso."
            )}\n\`\`\``
          )
          .addField(
            ":file_folder: Tipo",
            `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``,
            true
          )
          .addField(
            ":stopwatch: Tiempo",
            `\`\`\`fix\n${Math.floor(
              Date.now() - message.createdTimestamp
            )}ms\n\`\`\``,
            true
          )
          .setColor("#7289DA");
        message.channel.send(embed);
      }
    } catch (err) {
      let code = args.slice(1).join(" ");
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          "Error en el eval",
          client.user.displayAvatarURL({ dynamic: true })
        )
        .addField(
          ":inbox_tray: Entrada",
          `\`\`\`js\n${code.length > 1024 ? "Mucho texto" : code}\n\`\`\``
        )
        .addField(":outbox_tray: Salida", `\`\`\`js\n${err}\n\`\`\``)
        .addField(":file_folder: Tipo", `\`\`\`js\nError\n\`\`\``)
        .setColor("RED");
      message.channel.send(embed);
    }
  } if(command == "8ball") {
      let pregunta = args.slice(1).join(" ");
      if(!pregunta) return message.reply("Escribe una pregunta");
      let respuestas = [
          "Si",
          "No",
          "Claro",
          "Claro que no",
          "Que?",
          "Eso creo",
          "No lo creo"
      ];
      let random = respuestas[Math.floor(Math.random() *respuestas.length)]
      message.channel.send(new Discord.MessageEmbed()
                          .setTitle("8ball :8ball:")
                          .setDescription(`${message.author}, a su pregunta \`${pregunta}\`\nMi respuesta es: \`${random}\``)
                          .setColor(0)); 
  } if(command == "trumpsay") {
      message.channel.startTyping();
      if (!args[1]) return message.channel.send("Pon algo");
      let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
      let meme = await Jimp.read(
        "https://media.discordapp.net/attachments/359425464885837827/593819763797393438/TrumpApi.png"
      );
      const realtext = await getWellText(args.slice(1).join(" "), 14, 88);
      meme.rotate(7);
      meme.print(font, 670, 320, realtext, 260);
      meme.rotate(-7, false);
      meme.autocrop();
      let render = await meme.getBufferAsync(Jimp.MIME_PNG);
      const attachment = new Discord.MessageAttachment(render, "trump.png");
      await message.channel.send(attachment);
      function getWellText(text, maxWordLength, maxTextLength = Infinity) {
        let realtext = "",
          post_text = "";
        for (let i = 0; i < text.length; i++) {
          if (realtext.length > maxTextLength) break;
          post_text += text[i];
          if (text[i] === " ") {
            post_text = " ";
            realtext += text[i];
            continue;
          }
          if (post_text.length > maxWordLength) {
            realtext += " " + text[i];
            post_text = " ";
          } else {
            realtext += text[i];
          }
        }
        return realtext;
      }
      message.channel.stopTyping();
  } if(command == "ascii") {
      let data = args.slice(1).join(" ");
        if (!data) return message.reply("Escribe algo.");
        if (data.length > 15)
          return message.reply("Solo se permite hasta 15 carácteres.");
        figlet(data, (err, result) =>
          message.channel.send("```" + result + "```")
        );
  } if(command == "love") {
      let u = "https://cdn.discordapp.com/attachments/792519367132708875/806291383300259900/9k.png"
      let member = message.mentions.members.map(x => x);
      if(!member[0]) return message.channel.send("Menciona al menos a una persona!");
      if(!member[1]) {
          if(member[0] == message.member) return message.channel.send(new Discord.MessageEmbed()
                                                                     .setTitle("Tu amor propio! :heart:")
                                                                     .setDescription("∞ % [██████████]\n\nTú eres el dueño de tu vida, no importa si te amas o te odias, tu valor personal ante ti debe ser infinito.\n\nNombre del ship: **"+message.author.username+"**")
                                                                     .setColor("ff0000"));
          let love = Math.floor(Math.random() * 100);
          if(love < 10) return message.channel.send(new Discord.MessageEmbed()
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [█..........]\n\nNo son nada entre ellos, tal vez se queden solo como conocidos\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+message.author.username.slice(4,9)+"**").setImage(u)
                                                   .setColor("ff0000"));
                   
          if(love > 10 && love < 30) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [███.......]\n\nSon conocidos, pero no mas que eso\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+message.author.username.slice(4,9)+"**").setImage(u)
                                                   .setColor("ff0000"));
          if(love > 30 && love < 60) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [██████.....]\n\nSon amigos, pero no creo que haya algo en el futuro...\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+message.author.username.slice(4,9)+"**").setImage(u)
                                                   .setColor("ff0000"));
          if(love > 60 && love < 90) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [████████..]\n\nUnos muy buenos amigos, con una posibilidad de que de algo en el futuro\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+message.author.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
          if(love > 90) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [██████████]\n\nPerfectamente ustedes pueden ser pareja, y una pareja duradera.\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+message.author.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
          
          
          
         
          
      } else {
          if((member[0] || member[1]) == message.member) return message.channel.send(new Discord.MessageEmbed()
                                                                     .setTitle("Tu amor propio! :heart:")
                                                                     .setDescription("∞ % [██████████]\n\nTú eres el dueño de tu vida, no importa si te amas o te odias, tu valor personal ante ti debe ser infinito.\n\nNombre del ship: **"+message.author.username+"**")
                                                                     .setColor("ff0000"));
                    let love = Math.floor(Math.random() * 100);
          if(love < 10) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [█..........]\n\nNo son nada entre ellos, tal vez se queden solo como conocidos\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+member[1].user.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
                   
          if(love > 10 && love < 30) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [███.......]\n\nSon conocidos, pero no mas que eso\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+member[1].user.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
          if(love > 30 && love < 60) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [██████.....]\n\nSon amigos, pero no creo que haya algo en el futuro...\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+member[1].user.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
          if(love > 60 && love < 90) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [████████..]\n\nUnos muy buenos amigos, con una posibilidad de que de algo en el futuro\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+member[1].user.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
          if(love > 90) return message.channel.send(new Discord.MessageEmbed().setImage(u)
                                                   .setTitle("Calculando...")
                                                   .setDescription(love+"% [██████████]\n\nPerfectamente ustedes pueden ser pareja, y una pareja duradera.\n\nNombre del ship: **"+member[0].user.username.slice(0,4)+member[1].user.username.slice(4,9)+"**")
                                                   .setColor("ff0000"));
      }
  } if(command == "serverinfo") {
      let x = {
          NONE: "Ninguno",
          LOW: "Bajo",
          MEDIUM: "Medio",
          HIGH: "Alto",
          VERY_HIGH: "Muy alto"
      };
      let o = message.guild;
      let region = {
europe: "Europa :flag_eu:",
brazil: "Brasil :flag_br: ",
hongkong: "Hong Kong :flag_hk:",
japan: "Japón :flag_jp:",
russia: "Rusia :flag_ru:",
singapore: "Singapur :flag_sg:",
southafrica: "Sudáfrica :flag_za:",
sydney: "Sydney :flag_au:",
"us-central": "Central US :flag_us:",
"us-east": "Este US :flag_us:",
"us-south": "Sur US :flag_us:",
"us-west": "Oeste US :flag_us:",
"vip-us-east": "VIP US Este :flag_us:",
"eu-central": "Europa Central :flag_eu:",
"eu-west": "Europa Oeste :flag_eu:",
london: "London :flag_gb:",
amsterdam: "Amsterdam :flag_nl:",
india: "India :flag_in:"
};
      message.channel.send(new Discord.MessageEmbed()
      .setTitle("Información del servidor")
      .addField("Nombre", o.name, true)
      .addField("ID", o.id, true)
      .addField("Región", region[o.region], true)
      .addField("Miembros totales", o.memberCount, true)
      .addField("Nivel de verificación", x[o.verificationLevel])
      .addField("Conectados", o.members.cache.filter(l => l.presence.status == "online").size, true)
      .addField("Ausentes", o.members.cache.filter(l => l.presence.status == "idle").size, true)
      .addField("No molestar", o.members.cache.filter(l => l.presence.status == "dnd").size, true)
      .addField("Desconectados", o.members.cache.filter(l => l.presence.status == "offline").size, true)
      .addField("Bots", o.members.cache.filter(l => l.user.bot).size, true)
      .addField("Usuarios", o.members.cache.filter(l => !l.user.bot).size, true)
      .addField("Categorías", o.channels.cache.filter(p => p.type == "category").size, true)
      .addField("Canales de texto", o.channels.cache.filter(_ => _.type == "text").size, true)
      .addField("Canales de voz", o.channels.cache.filter(_ => _.type == "voice").size, true)
      .addField("Roles", o.roles.cache.size)
      .addField("Emojis", o.emojis.cache.size)
      .addField("Mejoras", o.premiumSubscriptionCount)
      .setThumbnail(o.iconURL({ dynamic: true }))
      .setColor("RANDOM"))
      
  } if(command == "nitro") {
      message.channel.send("https://discord.gift/"+codes.code.everything(24), new Discord.MessageEmbed()
                          .setTitle("Nitro!")
                          .setDescription("Recuerda que este es un código random. No te dará nitro de verdad, pero bueno, disfruta!")
                          .setColor("RANDOM")
                          .setImage("https://support.discord.com/hc/article_attachments/360013500032/nitro_gif.gif"))
  } if(command == "trump") {
      let msg = args.slice(1).join(" ");
      if(!msg) return message.channel.send("Escribe el mensaje!");
      let attach = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/trump?message=${msg}`, "trump.png")
      message.channel.send(attach)
  } if(command == "clyde") {
      // 
      let msg = args.slice(1).join(" ");
      if(!msg) return message.channel.send("Escribe el mensaje!");
      let attach = new Discord.MessageAttachment(`https://ctk-api.herokuapp.com/clyde/${msg}`, "clyde.png")
      message.channel.send(attach)
  } if(command == "servericon") { 
  let i = message.guild.iconURL({ dynamic: true, format: "jpg", size: 4096});
      let e = new Discord.MessageEmbed()
      .setTitle("Server icon: "+message.guild.name)
      .setImage(i)
      .setDescription("[URL]("+i+")")
      .setColor("RANDOM");
      message.channel.send(e)
  } if(command == "ping") {
      let edit = new Discord.MessageEmbed()
      .setTitle("Ping")
      .setDescription("Cargando ping...")
      .setColor("RANDOM");
      message.channel.send(edit).then(async msg => {
          let embed = new Discord.MessageEmbed()
          .setTitle("Ping")
          .setDescription(`:incoming_envelope: Envío de mensajes: \`${Math.floor(Date.now() - msg.createdTimestamp)}ms\`
:satellite_orbital: DiscordAPI: \`${client.ws.ping}ms\``)
          .setColor("RANDOM");
          msg.edit(embed)
      })
  } if(command == "ppt") {
      let o = args[1]
      if(!o || !["piedra", "papel", "tijera"].includes(o.toLowerCase())) return message.channel.send("Opciones: `piedra`, `papel`, `tijera`");
      
      if(o == "piedra") {
          let a = [
              "Elejste: `piedra`, yo elejí: `piedra`, es un empate!",
              "Elejiste: `piedra`, yo elejí: `papel`, he ganado!",
              "Elejiste: `piedra`, yo elejí: `tijera`, has ganado!"
          ];
          let e = a[Math.floor(Math.random() * 3)];
          message.channel.send(`**${e}**`)
      } if(o == "papel") {
          let a = [
              "Elejste: `papel`, yo elejí: `piedra`, has ganado!",
              "Elejiste: `papel`, yo elejí: `papel`, es un empate!",
              "Elejiste: `papel`, yo elejí: `tijera`, he ganado!"
          ];
          let e = a[Math.floor(Math.random() * 3)];
          message.channel.send(`**${e}**`)
      } if(o == "tijera") {
          let a = [
              "Elejste: `tijera`, yo elejí: `piedra`, he ganado!",
              "Elejiste: `tijera`, yo elejí: `papel`, has ganado!",
              "Elejiste: `tijera`, yo elejí: `tijera`, es un empate!"
          ];
          let e = a[Math.floor(Math.random() * 3)];
          message.channel.send(`**${e}**`)
      }
  } if(command == "buscaminas") {
      const choices = ["||:zero:||", "||:one:||", "||:two:||", "||:three:||", "||:four:||", "||:five:||", "||:six:||", "||:seven:||", "||:eight:||","||:bomb:||"];
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Valores que puede tomar una casilla
  const bomb = 9; //El valor 9 representa el de la mina
  let bombas = 20; //NUMERO DE BOMBAS - Se puede cambiar y mejorar si se quiere jugar con eso
  
  let row = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria
  let column = number[Math.floor(Math.random() * number.length)]; //Inicializa una posicion aleatoria
  
  var buscaminas=new Array(10); //Crea un array de 10

  for (let i = 0; i < 10; i++){
    buscaminas[i]=new Array(10); //Hace que el array de antes sea bidimensional (un tablero)
  }

  for (let i = 0; i<10; i++){
    for (let j = 0; j<10 ;j++){
      buscaminas[i][j] = 0;		//Inicializamos el tablero poniendo las casillas a cero
    }
  }
  while (bombas != 0) { // Hasta que no hayamoso colocado todas la bombas no se sale
    while(buscaminas[row][column]==9){ //Cambias las posiciones si en ellas haya una bomba
        row = number[Math.floor(Math.random() * number.length)]; 
        column = number[Math.floor(Math.random() * number.length)];
    }
    //Si encuentra una casilla sin bomba, cambia su valor por el 9 (bomba) y resta una bomba al contador
      bombas = bombas-1;
      buscaminas[row][column] = 9;
      
    //Esta parte es la mÃ¡s liosa, pero lo que hacen los siguientes pasos es  mirar en que posicion esta la bomba para incrementar el valor de las casillas adyacentes si no son bombas.
    
     let iteri = 3; //Numero de casillas por fila para iterar 

		for (let i = 0; i < iteri; i++) {
			let iterj = 3; //Numero de casillas por columna por iterar (Se reinicia por cada fila)
			if (row == 0 && i == 0)
				i++; //Si la casilla estÃ¡ arriba del todo, se le aumenta el valor a la i
			if (row == 10 - 1 && i == 0)
				iteri--; //Si la casilla esta bajo del todo, las iteraciones se decrementan
			for (let j = 0; j < iterj; j++) {
				if (column == 0 && j == 0)
					j++; //Si la casilla estÃ¡ a la izquierda del todo, se le aumenta la j
				if (column == 10 - 1 && j == 0)
					iterj--;//Si la casilla estÃ¡ a la derecha del todo, se decrementan iteraciones
				if (i != 1 || j != 1)//Si no es la casilla inicial
					if (buscaminas[row + i - 1][column - 1 + j] != bomb) //Si no es una bomba
						buscaminas[row + i - 1][column - 1 + j]++; //Incrementar el valor casilla
			}
		}
      
    }
  
   //Finalmente cambiamos los nÃºmeros por los emojis ocultos para crear el juego
  for (let i = 0; i<10; i++){
    for (let j = 0; j<10;j++){
        buscaminas[i][j] = choices[buscaminas[i][j]];
    }
  }
  
  return message.channel.send(new Discord.MessageEmbed().setTitle("Buscaminas!").setDescription(buscaminas).setColor("RED").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})));
  } if(command == "bigtext") {
      if(!args.slice(1).join(" ")) return message.channel.send("Error - Introduce un mensaje para transformarlo en Indicadores Regionales.")
      message.channel.send(BigText(args.slice(1).join(' ')));
// BigText('Palabra') => Llamamos a la funciÃ³n y en los parametros colocamos el texto (Para convertirlo en "Grande")

function BigText(argsu) {
    const array = [];
    // AquÃ­ es donde guardaremos la palabra
    for (const letra of Array.from(argsu)) {
        // Sacamos letra a letra y vericamos con los if lo siguiente...
        if (/\d/g.test(letra)) {
            // Si la letra es un numero
            switch(letra) {
                case '0':
                    // si la letra es 0 => emoji
                    array.push(':zero:');
                break;
                case '1':
                    // si la letra es 1 => emoji
                    array.push(':one:');
                break;
                case '2':
                    // si la letra es 2 => emoji
                    array.push(':two:');
                break;
                case '3':
                    // ...
                    array.push(':three:');
                break;
                case '4':
                    // ...
                    array.push(':four:')
                break;
                case '5':
                    // ...
                    array.push(':five:');
                break;
                case '6':
                    // ...
                    array.push(':six:');
                break;
                case '7':
                    // ...
                    array.push(':seven:');
                break;
                case '8':
                    // ...
                    array.push(':eight:');
                break;
                case '9':
                    // ...
                    array.push(':nine:');
                break;
            }
        } else if (/[^a-z]/gi.test(letra)) {
            // Si no es una letra ni numero
            array.push(letra);
            // lo pusheamos tal cual esta
        } else {
            // Si no es un numero o otro caracter
            // pusheamos el emoji de la letra
            array.push(` :regional_indicator_${letra.toLowerCase()}: `);
            // Si la letra esta en mayuscula la convertiremos a minuscula con toLowerCase()
        }
    }
    return array.join(' ');
    // Unimos el array y lo separamos un poco
}
  } if(command == "addrole") {
      let m = message.mentions.members.first() ||
          	  message.guild.members.cache.get(args[1]) ||
              message.guild.members.cache.find(x => x.displayName == args.slice(1).join(" ")) ||
              message.guild.members.cache.find(x => x.user.tag == args.slice(1).join(" "));
      
      let r = message.mentions.roles.first() ||
              message.guild.roles.cache.get(args[1]) ||
              message.guild.roles.cache.find(x => x.name == args.slice(1).join(" "));
      
      if(!m || !r) return message.channel.send("Menciona un miembro o pon su nombre y menciona un rol o pon su nombre");
      
      m.roles.add(r.id);
      
      message.channel.send("Rol agregado al miembro")
  } if(command == "remrole") {
      let m = message.mentions.members.first() ||
          	  message.guild.members.cache.get(args[1]) ||
              message.guild.members.cache.find(x => x.displayName == args.slice(1).join(" ")) ||
              message.guild.members.cache.find(x => x.user.tag == args.slice(1).join(" "));
      
      let r = message.mentions.roles.first() ||
              message.guild.roles.cache.get(args[2]) ||
              message.guild.roles.cache.find(x => x.name == args.slice(2).join(" "));
      
      if(!m || !r) return message.channel.send("Menciona un miembro o pon su nombre y menciona un rol o pon su nombre");
      
      m.roles.remove(r.id);
      
      message.channel.send("Rol removido al miembro")
  } if(command == "nuke") {
      let link = "https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif"
//declaramos link como un GIF de una explosion. lo vamos a mandar al canal clonado

const nuke = new Discord.MessageAttachment(link, "nuke.gif")
//convertimos el link a un attachment con el nombre nuke

var posicion = message.channel.position
//obtenemos la posicion del canal donde se uso el comando

message.channel.clone().then((canal) => {

//Clonamos el canal donde se ejecuto el comando y luego
        message.channel.delete()

//eliminamos el canal donde se ejecuto el comando y luego

        canal.setPosition(posicion)

//hacemos que el canal clonado asuma la posicion del canal donde se ejecuto el comando y luego

        canal.send("<a:N_BlueTick:801587012544495617> Canal Nukeado perfectanmente <a:pepejam:784328118852517909>", nuke)

//enviamos al canal clonado el GIF de la explosion y "canal nukeado"

    });
  } if(command == "lindo") {
      message.channel.send(`${message.author}, tu eres **${Math.floor(Math.random() * 100)}%** lindo`)
  } if(command == "charcount") {
      let i = args.slice(1).join(" ");
      if(!i) return message.channel.send("Escribe el texto.");
      message.channel.send("Tu texto mide: **"+i.length + "** caracteres.")
  } if(command == "userinfo") {
      const member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[1]) ||
        message.guild.members.cache.find(c => c.displayName.startsWith(args[1])) ||
        message.member;

        function formatDate(template, date) {
          var specs = "YYYY:MM:DD:HH:mm:ss".split(":");
          date = new Date(
            date || Date.now() - new Date().getTimezoneOffset() * 6e4
          );
          return date
            .toISOString()
            .split(/[-:.TZ]/)
            .reduce(function(template, item, i) {
              return template.split(specs[i]).join(item);
            }, template);
        }
        let estado = {
          online: "Conectado",
          idle: "Ausente",
          dnd: "No molestar",
          offline: "Desconectado"
        };
        const embed = new Discord.MessageEmbed()

          .setColor("RANDOM")
          .setTitle("Información del usuario: " + member.user.username)
          .addField("**#️⃣ Nombre**:", "**" + `${member.user.tag}` + "**")
          .addField("**🆔 ID**:", `${member.user.id}`)
          .addField(
            "**📌 Apodo**:",
            `${member.nickname !== null ? `${member.nickname}` : "Ninguno"}`,
            true
          )
          .addField(
            "**📥 Fecha de Ingreso al Servidor:**",
            formatDate("DD/MM/YYYY, a las HH:mm:ss", member.joinedAt)
          )
          .addField(
            "**✨ Cuenta Creada:**",
            formatDate("DD/MM/YYYY, a las HH:mm:ss", member.user.createdAt)
          )
          .addField(
            "**🎮  Jugando**:",
            member.user.presence.game != null
              ? member.user.presence.game.name
              : "Nada",
            true
          )
          .addField(
            "**🎖 Roles:**",
            member.roles.cache.map(roles => `\`${roles.name}\``).join(", ")
          )
          .addField(
            "**🎨 Estado**:",
            "**" + estado[member.user.presence.status] + "**"
          )
          .addField(
            "**<a:NitroBoost:787442671136014346> Boostea este servidor**:",
            member.premiumSince ? "**Si**" : "**No**"
          )
          .addField(
            "🔰 Permisos",
            message.member.permissions
              .toArray()
              .join(" **|** ")
              .replace("CREATE_INSTANT_INVITE", "Crear invitacion")
              .replace("KICK_MEMBERS", "Expulsar")
              .replace("BAN_MEMBERS", "Banear")
              .replace("ADMINISTRATOR", "Administrador")
              .replace("MANAGE_CHANNELS", "Gestionar canales")
              .replace("MANAGE_GUILD", "Gestionar servidor")
              .replace("ADD_REACTIONS", "Añadir reacciones")
              .replace("VIEW_AUDIT_LOG", "Ver el registo")
              .replace("PRIORITY_SPEAKER", "Prioridad de palabra")
              .replace("STREAM", "Transmitir")
              .replace("VIEW_CHANNEL", "Ver canales")
              .replace("SEND_MESSAGES", "Enviar mensajes")
              .replace("SEND_TTS_MESSAGES", "Enviar mensajes de voz")
              .replace("MANAGE_MESSAGES", "Gestionar mensajes")
              .replace("EMBED_LINKS", "Insertar enlaces (embeds)")
              .replace("ATTACH_FILES", "Adjuntar archivos")
              .replace("READ_MESSAGE_HISTORY", "Leer el historial de mensajes")
              .replace("MENTION_EVERYONE", "Mencionar everyone y here")
              .replace("USE_EXTERNAL_EMOJIS", "Emojis externos")
              .replace("VIEW_GUILD_INSIGHTS", "Ver info del server")
              .replace("CONNECT", "Conectarse")
              .replace("SPEAK", "Hablar")
              .replace("MUTE_MEMBERS", "Silenciar")
              .replace("USE_VAD", "Detección de prioridad de palabra")
              .replace("DEAFEN_MEMBERS", "Ensordecer")
              .replace("MOVE_MEMBERS", "Mover")
              .replace("CHANGE_NICKNAME", "Cambiar apodo")
              .replace("MANAGE_NICKNAMES", "Gestionar apodos")
              .replace("MANAGE_ROLES", "Gestionar roles")
              .replace("MANAGE_WEBHOOKS", "Gestionar webhooks")
              .replace("MANAGE_EMOJIS", "Gestionar emojis")
          )
          .setThumbnail(
            member.user.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 1024
            })
          )
          .setFooter(
            `${message.author.username}`,
            `${message.author.displayAvatarURL()}`
          ); //nombre y avatar del usuario en el footer
        if (member.user.bot)
          embed.setTitle("Información del bot: " + member.user.username);

        message.channel.send(embed);
  } if(command == "structure") {
      //En v12 es más fácil hacer esto :)
const { Util } = require("discord.js");

    //Si no proviene de un servidor...
    if(!message.guild) return;

    //Esta variable se le será agregada el texto que formaría "La estructura"
    let text = "";
    
    //Para ver la estructura en los ojos de otro miembro.
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]) ||
      message.guild.members.cache.find(m => m.nickname === args.slice(1).join(" ")) ||
      message.guild.members.cache.find(m => m.user.tag === args.slice(1).join(" ")) ||
      message.guild.members.cache.find(m => m.user.username === args.slice(1).join(" "));
    //Una colección, bueno, ahora mismo es indefinido
    let col;
    if(member) {
      //Si hubo un miembro, col será una colección donde sólo estarán los canales donde el miembro tenga permisos de leer el canal.
      col = message.guild.channels.cache.filter(c => c.type === "category" ? (c.children.some(r => r.permissionsFor(member).has("VIEW_CHANNEL"))) : (c.permissionsFor(member).has("VIEW_CHANNEL")));

    } else {
      //Antes de hacer fetch por gusto veremos si hay argumentos. Y haremos un fetch, en el caso hayan puesto una ID.
      if(args[1]) member = await message.guild.members.fetch(args[1]);
      //Si esta vez existe, hacer lo mismo que con el code del primer if.
      if(member) col = message.guild.channels.cache.filter(c => c.type === "category" ? (c.children.some(r => r.permissionsFor(member).has("VIEW_CHANNEL"))) : (c.permissionsFor(member).has("VIEW_CHANNEL")));

      //Fallback a todos los canales del servidor
      else col = message.guild.channels.cache;
    }
    //Primero los que no tengan categorías Y lo que no son categorías...
    //Queremos que salga ordenado, para eso usamos discordSort de las utilidades de Discord.js
    const wocat = Util.discordSort(col.filter(c => !c.parent && c.type !== "category"))
    //Regla importante. Los canales basados en texto y los canales de tienda van en una "primera columna". Los canales de voz van "en una segunda columna". Intentalo tú mismo, verás que no puedes poner un canal de voz encima de un canal de texto.
    const textnp = wocat.filter(c => ['text', 'store', 'news'].includes(c.type));
    const voicenp = wocat.filter(c => c.type === "voice");
    //Si hay canales sin una categoría
    if(wocat.size >= 1) {
      //Llamar a una función para el mapeo.
      text += textnp.map(advancedmap).join("\n");
      text += voicenp.map(advancedmap).join("\n");
    };

    //Ahora recogamos las categorías!
    let cats = Util.discordSort(col.filter(c => c.type === "category"));
    cats.each(c => {
      //Tenemos que asegurarnos que los canales que tenga la categoría también lo tenga la colección que filtramos. Usamos el método intersect
      const children = c.children.intersect(col);

      //Separar....
      const textp = children.filter(c => ['text', 'store', 'news'].includes(c.type));
      const voicep = children.filter(c => c.type === "voice");
      //Por cada categoría, aumentar esto a la variable text.
      text += "\n[📂] " + c.name;
      text += textp.size ? ("\n\t" + Util.discordSort(textp).map(advancedmap).join("\n\t")) : ""
      text += voicep.size ? ("\n\t" + Util.discordSort(voicep).map(advancedmap).join("\n\t")) : ""
    })
    //Separamos nuestro mensaje en arrays, para que se puedan enviar en mensajes separados en el caso nos topemos con el límite.
    const split = Util.splitMessage(text)

    //Loop para que envie los mensajes.
    for (let i in split) {
      await message.channel.send("\n" + message.guild.name, { code: split[i] })
    }

//Función que se usará para construir la estructura
function advancedmap(c) {
        //Una variable que almacene el texto.
        let r = "";
        //Para cada caso, un estilo distinto.
        switch(c.type) {
          case "news":
                r+="[📣] " + c.name
          case "text":
            r += "[📃] " + c.name;
            break;
          case "voice":
            r += "[🎙] " + c.name + (c.members.size ? (c.members.map(d => {
              if(d.user.bot) {
                return "\n\t\t[🤖] " + d.user.tag;
              } else {
                return "\n\t\t[🙎] " + d.user.tag;
              }
            })).join("") : "")
            break;
          case "store":
            r += "[🏪] " + c.name;
            break;
          default:
            //Quien sabe si en la caché del bot un canal no tenga un tipo establecido....
            r += "[?] " + c.name;
            break;
        }
        //Regresar el texto decorado. Y asi con cada canal.
        return r;
}
  } if(command == "roles") {
      let roles = [];
      let roles_b = [];
      message.guild.roles.cache.filter(x => !x.managed).map(x => roles.push(`${x}`));
      message.guild.roles.cache.filter(c => c.managed).map(o => roles_b.push(`${o}`));
      
      let i = 0;
      let o = 10;
      
      let embed = new Discord.MessageEmbed()
      .setTitle("Roles")
      .addField("Roles normales", roles.slice(0, 10).join(" | "))
      .addField("Roles de bots", roles_b.slice(0, 10).join(" | "))
      .setFooter("Emojis de " + message.guild.name)
      .setColor("GREEN");
      
      let m = await message.channel.send(embed);
      await m.react("⬅️");
      await m.react("⏹️");
      await m.react("➡️");
      
      let filter = (reaction, user) => ["⬅️", "⏹️", "➡️"].includes(reaction.emoji.name) && message.author.id == user.id;
      
      let collect = await m.createReactionCollector(filter, { max: Infinity, time: ms("1d")});
      collect.on("collect", async (reaction, user)=> {
          let embed2 = new Discord.MessageEmbed()
      .setTitle("Roles")
      .addField("Roles normales", roles.slice(i, o).join(" | "))
      .addField("Roles de bots", roles_b.slice(i, o).join(" | "))
      .setFooter("Emojis de " + message.guild.name)
      .setColor("GREEN");
          switch(reaction.emoji.name) {
              case "⬅️":
                  if(i > 1) {
                      i-=10;
                      o-=10;
                      m.edit(embed2);
                  }
                  break;
              case "⏹️":
                  collect.stop()
                  m.reactions.removeAll()
                  break;
              case "➡️":
                  
                      i+=10;
                      o+=10;
                      m.edit(embed2)
                      break;
                  
                  
          }
      })
      
  } if(command == "traductor") {
      const translate = require("node-google-translate-skidz");
      try {
        if (!args[3]) 
            return message.channel.send(
              "Uso: `" +
                prefix +
                "traduce (lenguaje del texto) (lenguaje a traducir) (texto)`"
            );

        translate(
          {
            text: args.slice(3).join(" "),
            source: args[1],
            target: args[2]
          },
          function(result) {
              message.channel.send(
                new Discord.MessageEmbed()
                  .setTitle("Traductor!")
                  .addField("Entrada", `\`\`\`${args.slice(3).join(" ")}\`\`\``)
                  .addField("Salida", `\`\`\`${result.translation}\`\`\``)
                  .setColor("#ff0000")
              );
          }
        );
      } catch (err) {
        if (err.message.startsWith("Need a text to translate")) 
            return message.channel.send(
              "Uso: `" +
                prefix +
                "traduce (lenguaje del texto) (lenguaje a traducir) (texto)`"
            );
        
      }
  } if(command == "members") {
      message.channel.send("Cantidad de miembros: **" + message.guild.memberCount + "**")
  }
 } catch(error) {
     console.error(error);
     return message.channel.send(new Discord.MessageEmbed()
                                .setTitle(":x: Error :x:")
                                .setDescription("Ha ocurrido un error desconocido, por favor contacta a algun staff o al owner del bot para arreglar esto: ```js\n"+error+"```")
                                .setColor("ff0000"))
 }
});

client.on("guildMemberAdd", async member => {
    if(member.guild.id != "782764660687765514") return;
    let message = member;
  let o = client.channels.cache.get("806183798299164686");
o.send(new Discord.MessageEmbed().setTitle("¡Un nuevo miembro se ha unido!").setDescription("¡Un nuevo miembro se ha unido!\n\nBienvenido a " + message.guild.name + " <@" + message.user.id + ">! `#" + message.user.discriminator + "`\n\nGracias por unirte! Recuerda leer  <#782778422178218024> para evitar cualquier tipo de problema!").setImage(message.guild.iconURL({dynamic: true, size: 4096})).setFooter(message.guild.name).setTimestamp().setColor("ORANGE"));
});

client.on("guildMemberRemove", async member => {
    client.channels.cache.get("806183798299164686").send(`<- ${member.toString()} abandono el servidor.\nAhora somos: ${member.guild.memberCount}`)
})

client.on("messageReactionAdd", async (reaction, user) => {
    let message = reaction.message;
    if(user.bot) return;
    if(reaction.partial) await reaction.fetch();
    if(message.partial) await message.fetch()
  if (reaction.emoji.name === "🎟️" && message.channel.id == "803273822224384020") {
      console.log("SI SE HA REACCIONADO :)")
      reaction.users.remove(user.id)
    let canal = await message.guild.channels.create(
      `${user.username}-${user.discriminator}`,
      {
        type: "text",
        permissionOverwrites: [
          {
            id: reaction.message.guild.roles.everyone,
            allow: [],
            deny: ["VIEW_CHANNEL"]
          },
          {
            id: user.id,
            allow: [
              "VIEW_CHANNEL",
              "SEND_MESSAGES",
              "ADD_REACTIONS",
              "ATTACH_FILES",
              "EMBED_LINKS",
              "USE_EXTERNAL_EMOJIS"
            ],
            deny: ["MANAGE_MESSAGES", "MENTION_EVERYONE", "MANAGE_CHANNELS"]
          }
        ]
      }
    );
    let msg = await canal.send(
      `<@&803280173012221992> <@${user.id}> Necesita ayuda!`,
      new Discord.MessageEmbed()
        .setTitle("Nuevo ticket")
        .setDescription(
          "Muchas gracias por crear un ticket!\nPor favor cuentanos tu problema, el staff te responderá lo mas rapido posible!\nReacciona con :lock: Para cerrar el ticket"
        )

        .setColor("ff0000")
    );
    await msg.react("🔒");
    let collector = await msg.createReactionCollector(null, {
      max: ms("1d"),
      time: ms("1d")
    });
    collector.on("collect", async (reaction, user) => {
      if (reaction.emoji.name === "🔒") {
        canal.send(
          "<a:Exito:792018446517796875> | El ticket será cerrado en 5 segundos!"
        );
        setTimeout(() => {
          canal.delete();
        }, ms("5s"));
      }
    });
  } else {
      console.log("NO SE HA REACCIONADO >:(")
  }
});

client.on("messageDelete", async msg => {
    if(msg.content == "") return;
    let logs = await client.channels.cache.get("806177179409842218")
    
  client.snipes.set(msg.channel.id, {
    delete: msg.author,
    content: msg.content,
    image: msg.attachments.first() ? msg.attachments.first().proxyURL : null,
    channel: msg.channel
  });
    logs.send(new Discord.MessageEmbed().setTitle("〔:x:〕 Mensaje Eliminado").setAuthor(msg.author.tag, msg.author.avatarURL({dynamic:true})).addField("Autor", msg.author.tag).addField("Contenido",  msg.content).addField("Canal", msg.channel.toString()).setColor("ff0000").setFooter(msg.guild.name, msg.guild.iconURL({dynamic:true})))
});

client.on("messageUpdate", async (message, message2) => {
    
    if(message.content == "" || message2.content == "") return;
    
   let logs = await client.channels.cache.get("806177179409842218")
   
   logs.send(new Discord.MessageEmbed().setTitle("〔/〕 Mensaje Editado").setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setFooter(message.guild.name,message.guild.iconURL({dynamic:true})).addField("Autor", message.author.tag).addField("Antiguo mensaje", message.content).addField("Nuevo mensaje", message2.content).addField("Canal", message.channel.toString()).setColor("ff0000")).catch(console.error)
});

client.on("channelCreate", async channel => {
    let logs = await client.channels.cache.get("806177179409842218")
    let l = await channel.guild.fetchAuditLogs();
    let m = l.entries.first().executor
    logs.send(
        new Discord.MessageEmbed()
        .setTitle("〔+〕 Canal creado")
        .addField("Nombre", channel.name)
        .addField("ID", channel.id)
        .addField("Creador", m.tag)
        .setColor("GREEN")
    )
})

client.login(token);
