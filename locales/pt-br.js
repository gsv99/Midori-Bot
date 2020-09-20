module.exports = 
{
    name: "pt-br",
    events:[
        {
            name: "guildMemberAdd",
            cmd:{
                embedDescription: "Bem-Vindo",
                fieldUser: "User",
                fieldMsg: "Mensagem"
            }
        },
        {
            name: "guildMemberRemove",
            cmd:{
                titleKick: "Kick",
                titleBan: "Ban",
                titleLeave: "Saiu",
                fieldUser: "Usuário:",
                fieldReason: "Razão:",
                fieldExecutor: "Por:",
                fieldTag: "Tag:",
            }
        },
        {
            name: "message",
            cmd:{
                nullCommand: "Utilize os comandos `{prefix}help` e `{prefix}commands` para saber sobre o bot",
                reqOwnerPerm: "Apenas utilizavel pelo meu mestre",
                reqUserPerm: "Você precisa das seguites permissões:",
                reqBotPerm: "Eu não tenho essas permissões:"
            }
        },
        {
            name: "messageDelete",
            cmd:{
                embedTitle: "Mensagem Deletada",
                fieldUser: "Usuário:",
                fieldChannel: "Channel:",
                fieldMsg: "Mensagem:",
                fieldTag: "Tag:"
            }
        },
        {
            name: "messageUpdate",
            cmd:{
                embedTitle: "Mensagem Editada",
                fieldUser: "Usuário:",
                fieldChannel: "Channel:",
                fieldMsgOld: "Mensagem Antiga:",
                fieldMsgNew: "Mensagem Nova:",
                fieldTag: "Tag:"
            }
        },
        {
            name: "userUpdate",
            cmd:{
                embedNcTitle: "Nick trocado",
                fieldUser: "Usuário:",
                fieldOldNick: "Nick Antigo:",
                fieldNewNick: "Nick Novo:",
                embedImgTitle: "Imagem de perfil trocada"
            }
        },
        {
            name: "voiceStateUpdate",
            cmd:{
                embedEnter: "entrou no voice:",
                embedChange1: "trocou do voice:",
                embedChange2: "para o voice:",
                embedExit: "saiu do voice:"
            }
        }
    ],
    commands:[
        {
            name: "geral",
            cmd: {
                helpReturn: "Para saber informações do comando digite `{prefix}help {cmdName}`"
            }
        },
        {
            name: "test",
            help: {
                description: ":O"
            }
        },
        {
            name: "commands",
            cmd: {
                embedCtDescription: "`Para mais informações use {prefix}help nomedocomando`\n\n",
                embedCtTitle: "comandos",
                embedClTitle: "comandos",
                embedClDescription: "Exemplo: ```{prefix}commands <grupo>```",
                embedNullTitle: "Comando não encontrado :thinking:",
                embedNullDescription: "**Utilize:** `{prefix}commands` para ver os comandos"
            },
            help: {
                description: "Traz a lista de comandos disponíveis",
                usability: "Para trazer a lista de comandos digite `{prefix}commands`\n"
                + "Para trazer a lista de um tipo de comando digite `{prefix}commands tipodecomando`",
            }    
        },
        {
            name: "help",
            cmd: {
                embedUsability: "Usabilidade",
                embedAdditional: "Comandos adicionais",
                embedOthers: "Outros",
                embedTitle: "Ajuda:",
                embedDescription: "Aqui você pode encontrar ajuda sobre qualquer comando ou funcionalidade minha !!!",
                embedField1_title: "Usabilidade",
                embedField1_text: "Para pesquisar digite `{prefix}help nomedocomando`\n"
                +"Caso esteja buscando pela lista de comandos digite `{prefix}commands`\n"
                +"Espero que encontre o que procura :heart:",
                embedField2_title: "Outros",
                embedField2_text: "Para mais informações acesse: http://gitub.com/gsv99/Midori-Bot",
            },
            help: {
                description: "Traz informações sobre comandos",
            }    
        },
        {
            name: "weather",
            cmd: {
                returnNull: "Não encontrei nenhuma informação de tempo :worried:",
                tempname: `Temperatura de {weather.name}`,
                temp: `Temperatura:`,
                sens: `Sensação:`,
                local: `Local:`
            },
            help: {
                description: "Traz a temperatura atual do local requisitado",
                usability: "Pode ser utilizado de maneira simples `{prefix}tempo local`\n",
                others: "A utilização de acentos ou 'ç' na pesquisa pode não retornar dados",
            }
        },
        {
            name: "sayembed",
            cmd: {
                undefinedDescription: "Vc precisa de um `título` e de uma `descrição` !!"
            },
            help: {
                description: "Manda uma msg embed pelo Bot",
                usability: "Pode ser utilizando usando `{prefix}sayembed título || msgaqui`\n"
                +"Também pode ser mandando em um chat diferente usando`{prefix}sayembed #channel título || msgaqui`\n"
                +"**Os comandos say e sayembed utilizam os mesmos parâmetros**\n",
            }
        },
        {
            name: "say",
            cmd: {
            },
            help: {
                description: "Manda uma msg pelo Bot",
                usability: "Pode ser utilizando usando `{prefix}say msgaqui`\n"
                +"Também pode ser mandando em um chat diferente usando`{prefix}say #channel msgaqui`\n"
                +"**Os comandos say e sayembed utilizam os mesmos parâmetros**\n",
            }
        },
        {
            name: "mal",
            cmd: {
                fieldName: "Nome:",
                fieldScore: "Score:",
                fieldType: "Tipo:",
                fieldVol: "Volumes:",
                fieldRated: "Rated:",
                titleCharacter: "Character",
                resultNull: "Não encontrei nada :worried:"
            },
            help: {
                description: "Puxa informações do MAL ( My Anime List )",
                usability: "Pode se pesquisar um anime facilmente `{prefix}mal an naruto`\n"
                +"Também podemos retornar mangás e outras informações `{prefix}mal mg naruto`\n"
                +"**Após o mal podem ser utilizadas as seguintes informações:**\n"
                +"`ch` - Para encontrar um personagem\n"
                +"`pf` - Para encontrar um perfil no MAL\n",
            }
        },
        {
            name: "info",
            cmd: {
                titleBot: "Informação do Bot",
                titleServer: "Informações do Servidor",
                fieldName: "Nome:",
                fieldCreator: "Criador:",
                fieldCreatedAt: "Criado em",
                fieldEnterAt: "Entrou em",
                fieldMemberTotal: "Total de membros",
                fieldRegion: "Região",
                fieldUser: "Usuário",
            },
            help: {
                description: "Traz informações sobre pessoas e servidor",
                usability: "Para trazer informações sobre você digite `{prefix}info`\n"
                + "Para trazer informações sobre alguem digite `{prefix}info @usuário`\n",
                additional: "`{prefix}info bot` - Exibe informações do bot\n"
                +"`{prefix}info server` - Exibe informações do servidor\n",
            }
        },
        {
            name: "corona",
            cmd: {
                fieldConfirmed: "Confirmados:",
                fieldDeaths: "Mortes:",
                fieldRecovered: "Curados:",
                fieldDate: "Data:",
                footer: "Não saia de casa !!",
                resultNull: "Não encontrado !! `Obs: O nome do País deve ser em inglês`\n"
                + "Digite `{prefix}corona lista` para ver a lista de países !!"
            },
            help: {
                description: "Mostra casos de corona",
                usability: "Para trazer informações sobre algum Pais digite `{prefix}corona nomedopais`\n",
                additional: "`{prefix}corona lista` para ver a lista de países !!",
                others: "O Nome do Pais deve ser em inglês",
            }    
        },
        {
            name: "calculator",
            cmd: {
                returnResult: "Resultado:",
                validResult: "Digite uma conta valida !! :scales:"
            },
            help: {
                description: "Faz o cálculo de valores",
                usability: "Para fazer uma conta digite `{prefix}calc 1+1`\n",
                others: "Para calcular um valor antes utilize () ex: `1+1/(2-1)`",
            }    
        },
        {
            name: "avatar",
            cmd: {
                embedTitle: "Imagem de",
                embedDescription: "[Clique aqui]({avatarURL}) para abrir a imagem em seu browser"
            },
            help: {
                description: "Mostra a imagem de avatar da pessoa",
                usability: "Para fazer uma conta digite `{prefix}avatar @usuário`\n",
            }    
        },
        {
            name: "howboomer",
            cmd: {
                embedTitle: "Quão Boomer vc é?",
                userIs: "é",
                youIs: "Você é"
            },
            help: {
                description: "Quão boomer você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howboomer`\n",
                additional: "`{prefix}howboomer @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "howcommunist",
            cmd: {
                embedTitle: "Quão comunista vc é?",
                userIs: "é",
                youIs: "Você é",
                how: "comunista",
            },
            help: {
                description: "Quão comunista você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howcommunist`\n",
                additional: "`{prefix}howcommunist @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "howfurry",
            cmd: {
                embedTitle: "Quão furry vc é?",
                userIs: "é",
                youIs: "Você é",
            },
            help: {
                description: "Quão furry você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howfurry`\n",
                additional: "`{prefix}howfurry @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "howgay",
            cmd: {
                embedTitle: "Quão gay vc é?",
                userIs: "é",
                youIs: "Você é",
            },
            help: {
                description: "Quão gay você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howgay`\n",
                additional: "`{prefix}howgay @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "howjojo",
            cmd: {
                embedTitle: "Quão JoJo Fag vc é?",
                userIs: "é",
                youIs: "Você é",
            },
            help: {
                description: "Quão jojofag você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howjojo`\n",
                additional: "`{prefix}howjojo @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "howhappy",
            cmd: {
                embedTitle: "Quão Feliz vc é?",
                userIs: "é",
                youIs: "Você é",
                how: "feliz"
            },
            help: {
                description: "Quão Feliz você é ?",
                usability: "Para saber a porcentagem digite `{prefix}howhappy`\n",
                additional: "`{prefix}howhappy @usuário` para ver sobre alguem especifico",
            }    
        },
        {
            name: "emojimaker",
            cmd: {
                returnEmoji: "Novo emoji criado por:",
                returnEspaceError: "Os dois emojis precisam estar separados por `espaço` !!",
                returnInvalid: "Algum dos emojis é `inválido` ou é um `emoji padrão !!`",
            },
            help: {
                description: "Pode ser utilizado de maneira simples `{prefix}emojimaker emoji1 emoji2`\n",
                others: "Os emojis devem ser custom, no caso adicionados ao servidor, emojis padrões como 🚀 ou de outros servidores não funcionam",
            }    
        },
        {
            name: "gif",
            cmd: {
                returnNull: "Não encontrei nenhum gif :worried:",
                embedTitle: "Primeiro resultado de",
            },
            help: {
                description: "Traz o primeiro gif do tenor",
                usability: "Pode ser utilizado de maneira simples `{prefix}gif nomedogif`\n",
            }    
        },
        {
            name: "kill",
            cmd: {
            },
            help: {
                description: "Faz a pessoa morrer de alguma maneira",
                usability: "Pode ser utilizado de maneira simples `{prefix}kill @usuário`\n",
            }    
        },
        {
            name: "sharingan",
            cmd: {
                returnNull: "Você esta sem Chakra :anger: !!",
                embedDescription: "Cópia de",
            },
            help: {
                description: "Traz a ultima msg da pessoa selecionada",
                usability: "Pode ser utilizado de maneira simples `{prefix}sharingan @usuário`\n",
                others: "A msg retornada é referente ao canal onde foi utilizado o comando",
            }
        },
        {
            name: "snipe",
            cmd: {
                embedAuthor: "Deletada por",
                returnNull: "Sem mensagem :worried:",
            },
            help: {
                description: "Traz a ultima msg deletada do canal",
                usability: "Pode ser utilizado de maneira simples `{prefix}snipe`\n",
                others: "A msg retornada é referente ao canal onde foi utilizado o comando",
            }    
        },
        {
            name: "autodeletemsg",
            cmd: {
                returnNull: "Não encontrei nenhum canal :worried:",
                statusOk: "AutoDeleteMsg já esta:",
                statusNew: "AutoDeleteMsg agora esta",
                embedTitle: "Canais com",
            },
            help: {
                description: "Deleta msgs para deixar apenas imagens no canal desejado",
                usability: "Pode ser ativo utilizando `{prefix}autodeletemsg on #chat`\n"
                +"Para desabilitar use `{prefix}autodeletemsg off #chat`\n",
                additional: "`{prefix}autodeletemsg show` - Para mostrar todos os canais com autodeletemsg\n",
            }    
        },
        {
            name: "autorole",
            cmd: {
                returnNull: "Não encontrei esta `Role` :cry:",
                statusOk: "Autorole já esta:",
                statusNew: "Autorole agora esta",
                roleHigh: "Role de maior grau que a sua !!",
                roleChange: "Role trocada :sunglasses:!!",
                roleAtual: "Role atual é:",
                returnNotActived: "Precisa ser ativado !!"
            },
            help: {
                description: "Gerencia autorole do servidor dando cargo automáticamente para quem entra",
                usability: "Pode ser ativo utilizando `{prefix}autorole on @cargo`\n"
                +"A role pode ser alterada utilizando `{prefix}autorole rol @cargo`\n",
                additional: "`{prefix}autorole off` - Desabilita o autorole\n",
            }    
        },
        {
            name: "banner",
            cmd: {
                statusOk: "Banner já esta",
                statusNew: "Banner de bem-vindo agora esta",
                welcomeOff: "O Bem-vindo esta `{guild.welcome.status}` "
                + "e precisa ser ativo para o banner funcionar",
                bannerChange: "Imagem trocada `obs: As dimensões recomendadas são 1000x360!!`\n"
                + "`Digite {prefix}banner sh para ver o preview do banner`",
                invalidImg: "Não foi encontrada uma imagem valida :moyai:\n"
                +"`A imagem deve terminar com uma extensão valida de imagem (png, jpg e outras) e ser acessível!!`",
                canvasFillText: "Usuário:",
                returnPreview: "`Preview do banner:`",

            },
            help: {
                description: "Adiciona banner para o bem-vindo",
                usability: "Pode ser ativo utilizando `{prefix}banner on`\n"
                +"`{prefix}banner cst urldaimg` - Troca imagem do banner de boas-vindas\n",
                additional: "`{prefix}banner off` - Para desabilitar o comando\n"
                +"`{prefix}banner show` - Para mostrar o preview do banner\n",
                others: "As dimensões do banner de boas-vindas é de **1000x360**",
            }    
        },
        {
            name: "welcome",
            cmd: {
                returnNull: "Não encontrei nenhum canal :crying_cat_face:",
                statusOk: "Bem-vindo já esta",
                statusNew: "Bem-vindo agora esta",
                msgChange: "Mensagem de Bem-vindo modificada :face_with_monocle:!!",
                channelChange: "Canal trocado :face_with_monocle:!!",
                returnAtual: "Mensagem atual é:",
            },
            help: {
                description: "Gerencia toda a parte de Bem-Vindo do servidor",
                usability: "Pode ser ativo utilizando `{prefix}welcome on #chat`\n"
                +"A mesagem pode ser alterada utilizando `{prefix}welcome msg mensagem-aqui`\n"
                +"**Dentro da msg podem ser utilizadas as seguintes informações:**\n"
                +"`{member}` - Para a pessoa ser marcada\n"
                +"`{membercount}` - Para monstrar o número de pessoas no servidor\n",
                additional: "`{prefix}welcome off` - Para desabilitar o comando\n"
                +"`{prefix}welcome ch #chat` - Altera o canal do bem-vindo\n"
                +"`{prefix}welcome sh` - Exibe msg de bem-vindo\n",
                others: "Caso queira utilizar banners no bem-vindo utilize o comando `{prefix}banner`",
            }    
        },
        {
            name: "ban",
            cmd: {
                returnNull: "Não encontrei esse usuário :thinking:",
                reasonNull: "Razão inválida, digite uma razão",
                returnInvalid: "Essa pessoa não pode levar Banimento :flushed:",
                embedTitle: "Banido",
                embedFieldUser: "Usuario",
                embedFieldReason: "Razão",
            },
            help: {
                description: "Bane a pessoa do servidor",
                usability: "Pode ser utilizado digitando `{prefix}ban @usuario razão`\n",
            }    
        },
        {
            name: "kick",
            cmd: {
                returnNull: "Não encontrei esse usuário :thinking:",
                reasonNull: "Razão inválida, digite uma razão",
                returnInvalid: "Essa pessoa não pode levar Kick :flushed:",
                embedTitle: "Kickado",
                embedFieldUser: "Usuario",
                embedFieldReason: "Razão",
            },
            help: {
                description: "Kicka a pessoa do servidor",
                usability: "Pode ser utilizado digitando `{prefix}kick @usuario razão`\n",
            }    
        },
        {
            name: "log",
            cmd: {
                returnNull: "Não encontrei nenhum canal :crying_cat_face:",
                statusOk: "Log já esta",
                statusNew: "Log agora esta",
                channelChange: "Canal trocado :face_with_monocle:!!",
                channelAtual: "Canal de log atual é:",
                logOff: "Log esta `{guild.log.status}` e precisa ser ativado :cry:",
            },
            help: {
                description: "Gerencia toda a parte de Logs do servidor mostrando pessoas que sairam, msgs deletadas/editadas e nick alterados",
                usability: "Pode ser ativo utilizando `{prefix}log on #chat`\n"
                +"O canal pode ser alterado utilizando `{prefix}log ch #chat`\n",
                additional: "`{prefix}log off` - Desabilita o sistema de log\n"
                + "`{prefix}log show` - Mostra qual o canal atual do log",
            }    
        },
        {
            name: "notice",
            cmd: {
                invalidTime: "Preciso de um tempo valido !! :timer:",
                returnNull: "Preciso de uma mensagem :disappointed:",
                returnTime: "Seu anúncio sera enviado as:",
                nullNotice: "Nenhuma notícia programada :disappointed_relieved:",
                delNotice: "Sua notícia foi deletada e não será mais enviada !! :envelope: :gun:",
                returnFalseId: "Preciso de um ID de notice valido :face_with_monocle: !!"
            },
            help: {
                description: "Cria um anuncio de postagem pelo Bot",
                usability: "Pode ser utilizando usando `{prefix}notice msg 10s msgaqui`\n"
                +"Também pode ser mandando em um chat diferente usando`{prefix}notice msg 10s #channel msgaqui`\n"
                +"**Os comandos 'msg' e 'embed' utilizam os mesmos parâmetros**\n",
                additional: "É possivel escolher entre `msg` e `embed`\n"
                +`No caso de \`embed\` utilize desta forma: \`{prefix}notice embed 10s Titulo || msg\`\n`,
                others: "O tempo deve ser expecificado com uma letra após o número para ser considerado um tempo valido\n"
                +"**Exemplos:** `1s(seg) | 1m (min) | 1h (hora)`",
            }    
        },
        {
            name: "mute",
            cmd: {
                returnNull: "Não encontrei este Usuário",
                highRole: "Cargo maior ou igual",
                returnInvalid: "Você não escreveu um tempo valido!!",
                returnMuted: "foi mutado por",
                returnRemoveMute: "foi desmutado",
                mutesNull: "Não há ninguem mutado :shushing_face:",
                muteFalse: "Este usuário não esta mutado",
                unmuted: "foi desmutado !! :grin:",
                isMuted: "Este usuário já esta mutado !!"
            },
            help: {
                description: "Muta a pessoa escolhida por **'x'** tempo",
                usability: "Pode ser utilizando usando `{prefix}mute @usuário 10m(tempo)`\n",
                additional: "`{prefix}mute show` - Exibe a lista de mutados\n"
                +"`{prefix}mute remove @usuário` - Remove um mute antes da hora programada",
                others: "O tempo deve ser expecificado com uma letra após o número para ser considerado um tempo valido\n"
                +"**Exemplos:** `1s(seg) | 1m (min) | 1h (hora)`",
            }    
        },
        {
            name: "rolereaction",
            cmd: {
                returnNullChannel: "Nenhum canal encontrado :worried: !!",
                embedInitiatedTitle: "Vamos começar :goat: !!",
                embedInitiatedDescription: "Primeiro digite o que deseja mandar na msg, lembrando que o titulo e a msg devem ser dividos por `,` virgula !!",
                embedInitiatedField1: "Exemplo",
                embedInitiatedField1_1: "Um Titulo legal, Escolha a reação do pepe para receber o cargo pepe !!!",
                roleMsgCreated: "Role Reaction e Msg criados no canal selecionado :man_mage: !!",
                stopMsg: "Criação cancelada :octagonal_sign:",
                clearMsg: "Digite um novo titulo e descrição\n Exemplo: `titulo, descrição`",
                embedSaveTitle: "Mensagem salva :sunglasses: !!",
                embedSaveDescription: "Agora digite os emotes divididos por `,` virgula `Ex: :emoji:, @cargo`",
                embedSaveField1: "Opções",
                embedSaveField1_1: "`!!stop` - Para cancelar a criação\n"
                +"`!!clear` - Para trocar o titulo e descrição da msg",
                embedSaveField2: "Leia-me",
                embedSaveField2_1: "O bot ficara a espera dos emojis e cargos, lembre-se se quiser usar outros comandos precisa finalizar com !!stop ou completar o rolereaction !",
                returnEmojiNull: "Emoji não existe !! Tente outro !!",
                returnRoleNull: "Role não existe !!  Tente outro !!",
                returnRoleHigh: "Role de maior grau que a sua !!  Tente outro !!",
                returnSave: "Emoji e Cargo salvos !!\n"
                +"`Caso queira continuar digite + grupo de emoji/cargo !!`\n" 
                +"Caso queira finalizar digite `!!done`",
                returnExist: "Já existe, não foi salva",
                limitTime: "O tempo limite de espera foi atingido, criação cancelada! :knife:"
            },
            help: {
                description: "Dá cargos com reações em uma mensagem",
                usability: "Pode utilizado desta forma: `{prefix}rolereaction #channel`\n"
                +"**Após utilizar o comando:**\n"
                +"Digite o titulo e a msg divididos por vírgula `Ex: Titulo, toda a msg`\n"
                +"Mande uma msg com emoji e cargo para cada cargo `Ex: :emoji:, @cargo`\n"
                +"Após terminar de mandar todos os emojis e cargos utilize o comando de done `!!done`\n",
                additional: "",
                others: "",
            }    
        },
        {
            name: "lang",
            cmd: {
                atualLang: "A language atual é:",
                invalidLang: "Preciso de uma language valida :face_with_monocle:!!",
                changedLang: "Language alterada para",
                embedTitle: "Languages disponiveis:",
                statusOk: "Lang já é"
            },
            help: {
                description: "Troca a language do servidor",
                usability: "Pode ser utilizando desta forma: `{prefix}lang change languageAqui`",
                additional: "`{prefix}lang list` - Exibe a lista de languages\n"
                +"`{prefix}lang show` - Exibe a language atual",
            }
        },
        {
            name: "clear",
            cmd: {
                returnDeleted: "mensagens foram deletadas neste canal :regional_indicator_x:",
                returnLimit: "O limite máximo é de 50 msgs por vez",
            },
            help: {
                description: "Deleta mensagens no canal",
                usability: "Pode ser utilizando desta forma: `{prefix}clear 10`",
                additional: "O número maximo de msg para serem deletadas é de 50"
            }
        },
        {
            name: "twitch",
            cmd:{
                notFound: "Streamer não encontrado :confused:",
                delete: "Streamer deletado :cry:",
                success: "Streamer registrado com sucesso `Lembre de colocar o nome corretamente !! Alguns streamers podem ter nomes com letras e caracteres diferentes ou podem não aparecer nas primeiras 100 pesquisas na twitch`",
                error: "Erro ao registrar streamer :cry:",
                exist: "Streamer já está adicionado :flushed:",
                nullStreamers: "Nenhum streamer adicionado :disappointed_relieved:",
                notActived: "Para adicionar streamers o comando twitch precisa estar on !!\n"
                +"Utilize `{prefix}twitch on #channel` para habilitar !!",
                channelChange: "Canal trocado :face_with_monocle:!!",
                textChanged: "Msg de live trocada :face_with_monocle:!!",
                statusOk: "Twitch já esta",
                statusNew: "Twitch agora esta",
                returnNull: "Não encontrei nenhum canal :crying_cat_face:",
            },
            help:{
                description: "Sistema para mostrar Streamers da plataforma Twitch",
                usability: "Pode ser ativo utilizando `{prefix}twitch on #channel`\n"
                +"Pode ser desligado utilizando `{prefix}twitch off`\n"
                +"Para adicionar um streamer utilize `{prefix}twitch add stramernome`\n"
                +"A msg de anúncio pode ser alterado utilizando `{prefix}twitch msg STREAMERID MSGAQUI`\n",
                additional: "`{prefix}twitch show` - Para mostrar a lista de canais adicionado e IDs\n"
                +"`{prefix}twitch remove ID` - Para remover algum streamer\n"
                +"`{prefix}twitch ch #channel` - Para trocar o canal de lives",
                others: "Será exigido um channel para poder adicionar stramers !!",
            }
        },
        {
            name: "jail",
            cmd:{},
            help:{
                description: "Cria uma img da pessoa presa",
                usability: "Pode ser utilizando desta forma: `{prefix}jail`",
                additional: "Também pode ser utilizado marcando alguem: `{prefix}jail @user`"
            }
        },
        {
            name: "hack",
            cmd:{

            },
            help:{

            }
        },
        {
            name: "invite",
            cmd:{
                embedTitle: "Bot invite",
                embedDescription: "Obrigado por me escolher !!\n"
                +"Fico muito feliz de poder ser útil para você em seu servidor :heart:\n"
                +"[Clique aqui]({avatarURL}) para me convidar"
            },
            help:{
                description: "Cria um invite do bot para outro servidor",
                usability: "Pode ser utilizando desta forma: `{prefix}invite`"
            }
        },
        {
            name: "stats",
            cmd:{
                stats: "Status",
                servers: "Servidores",
                channels: "Channels",
                users: "Usuários",
                memory: "Memória Utilizada",
                uptime: "Tempo Ligada"
            },
            help:{
                description: "Mostra os status do bot",
                usability: "Pode ser utilizando desta forma: `{prefix}stats`",
            }
        },
        {
            name: "nickname",
            cmd:{
                returnSuccess: "Apelido no Servidor trocado !! :face_with_monocle:"
            },
            help:{
                description: "Troca o nickname da pessoa mencionada ou de si mesmo",
                usability: "Pode ser utilizando desta forma: `{prefix}nickname`",
                additional: "Também pode ser utilizado marcando alguem: `{prefix}nickname @user`"
            }
        },
        {
            name: "work",
            cmd:{

            },
            help:{

            }
        },
        {
            name: "bug",
            cmd:{
                returnNull: "Preciso de uma mensagem explicando o bug/erro :face_with_raised_eyebrow:",
                embedTitle: "Bug",
                embedDescription: "Seu bug foi enviado para o desenvolvedor e será resolvido o mais rápido possível !!!",
                embedFooter: "Obrigado por me ajudar ❤️"
            },
            help:{
                description: "Envia um bug para o desenvolvedor",
                usability: "Pode ser utilizado desta forma: `{prefix}bug bug-ou-erro-escrito-aqui`"
            }
        },
        {
            name: "dice",
            cmd:{
                returnNull: "Preciso receber um parametro de número maior que `1` :anger: !!",
                diceSolo: "O dado rolou",
                dice1: "O dado **1** rolou",
                dice2: "O dado **2** rolou ",
                embedTitle: "Dado"
            },
            help:{
                description: "Rola um dado com o número desejado",
                usability: "Pode ser utilizado desta forma: `{prefix}dice 20`",
                additional: "Também pode ser utilizado dois dados: `{prefix}dice 20 15`",
                others: "O número dos dados é escolhido pela pessoa ao digitar o comando",
            }
        }
    ]
}