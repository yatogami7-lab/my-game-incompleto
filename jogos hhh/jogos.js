const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})


    

const phrases = [
    "floresta de kuyamba",
   "uma arma básica de velocidade média e poder de ataque médio",
  " uma arma a distância de velocidade média e poder de ataque médio",
  "uma arma curta de velocidade alta e poder de ataque baixo",
  "uma arma básica de velocidade baixa e poder de ataque médio, pode ser lançada",
  "uma arma larga de velocidade baixa e poder de ataque alto",
   "uma arma corpo a corpo de velocidade alta e poder de ataque baixo, não precisa de reparos e não é perdivel",
   "com ele é possível lançar feitiços conhecidos",
  "uma arma larga de velocidade média e poder de ataque médio, pode ser lançada"
];
let images = [
  'florestajogos.jpeg', 
  'espadajogos.jpeg', 
  'arcojogos.jpeg',
  'adagajogos.jpeg',
  'machadojogos.jpeg',
  'marretajogos.jpeg',
  'soqueirajogos.jpeg',
  'livrojogos.jpeg',
  'tridentejogos.jpeg'
];

const buttons = [
  document.getElementById('arma-1'),
  document.getElementById('arma-2'),
  document.getElementById('arma-3'),
  document.getElementById('arma-4'),
  document.getElementById('arma-5'),
  document.getElementById('arma-6'),
  document.getElementById('arma-7'),
  document.getElementById('arma-8'),
  document.getElementById('vinha'),
  document.getElementById('controlar-plantas'),
  document.getElementById('controlar-pedra')
];

const efeito = [
    '.espada',
    '.arco',
    '.adaga',
    '.machado',
    '.marreta',
    '.soqueira',
    '.magia',
    '.tridente',
    '.vinhas',
    '.magiaplanta',
    '.magiapedra'
]

const imageElement = document.getElementById('imagem-0');
const fraseElement = document.getElementById('frase');

let kk = 'nada';
let vidaP = 'nada';
let dano = 'nada'

buttons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
      imageElement.src = images[index + 1]; // Use the next image
      fraseElement.innerText = phrases[index + 1]; // Use the corresponding phrase
      
  });

  button.addEventListener('mouseout', () => {
      imageElement.src = images[0]; // Reset to the original image
      fraseElement.innerText = phrases[0]; // Reset to the original phrase
  });

  button.addEventListener('click', () => {
    if (index === 0) {
    document.querySelectorAll(efeito[0]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 8;
     vidaP = 5
     dano = 3
}
    if (index === 1) {
    document.querySelectorAll(efeito[1]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 9;
     vidaP = 2
     dano = 2
}
    if (index === 2) {
    document.querySelectorAll(efeito[2]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 6;
     vidaP = 3
     dano = 1
}
    if (index === 3) {
    document.querySelectorAll(efeito[3]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 10;
     vidaP = 6
     dano = 4
}
    if (index === 4) {
    document.querySelectorAll(efeito[4]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 12;
     vidaP = 7
     dano = 5
}
    if (index === 5) {
    document.querySelectorAll(efeito[5]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 4;
     vidaP = 6
     dano = 3
}
    if (index === 6) {
    document.querySelectorAll(efeito[6]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 5;
     vidaP = 3
     dano = 5
}
    if (index === 7) {
    document.querySelectorAll(efeito[7]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
     kk = 7;
     vidaP = 6
     dano = 3
}
    if (index === 8) {
    document.querySelectorAll(efeito[8]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
    
}
    if (index === 9) {
    document.querySelectorAll(efeito[9]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
    
}
    if (index === 10) {
    document.querySelectorAll(efeito[10]).forEach(el => el.classList.add('ativa')); // Fix to iterate over NodeList
    
}
});
    
  });




const mapa = document.querySelectorAll('.mapa-0');
const mapa1 = document.querySelectorAll('.mapa-1');
const mapa2 = document.querySelectorAll('.mapa-2');
const mapa3 = document.querySelectorAll('.mapa-3');
const mapa4 = document.querySelectorAll('.mapa-4')

const originalImage = 'mapa1jogos.jpeg';
const imageMap = {
    'mapa1': 'mapa3jogos.jpg',
    'mapa2': 'mapa2jogos.jpg',
    'mapa3': 'mapa4jogos.jpg',
    'mapa4': 'mapa5jogos.jpg'
};

// Loop through each element in mapa1 NodeList
mapa1.forEach(element => {
    element.addEventListener('mouseover', () => {
        mapa.forEach(img => {
            img.src = imageMap['mapa1']; // Change to the image associated with mapa1
        });
    });

    element.addEventListener('mouseout', () => {
        mapa.forEach(img => {
            img.src = originalImage; // Change back to the original image
        });
    });
});

// Loop through each element in mapa2 NodeList
mapa2.forEach(element => {
    element.addEventListener('mouseover', () => {
        mapa.forEach(img => {
            img.src = imageMap['mapa2']; // Change to the image associated with mapa2
        });
    });

    element.addEventListener('mouseout', () => {
        mapa.forEach(img => {
            img.src = originalImage; // Change back to the original image
        });
    });
});

mapa3.forEach(element => {
    element.addEventListener('mouseover', () => {
        mapa.forEach(img => {
            img.src = imageMap['mapa3']; // Change to the image associated with mapa2
        });
    });

    element.addEventListener('mouseout', () => {
        mapa.forEach(img => {
            img.src = originalImage; // Change back to the original image
        });
    });
});

mapa4.forEach(element => {
    element.addEventListener('mouseover', () => {
        mapa.forEach(img => {
            img.src = imageMap['mapa4']; // Change to the image associated with mapa2
        });
    });

    element.addEventListener('mouseout', () => {
        mapa.forEach(img => {
            img.src = originalImage; // Change back to the original image
        });
    });
});


mapa1.forEach(element => {
    element.addEventListener('click', () => {
        mapa.forEach(img => {
           document.body.style.backgroundColor = "rgb(155, 190 ,0)"
           
        });
    });

});

mapa2.forEach(element => {
    element.addEventListener('click', () => {
        mapa.forEach(img => {
           document.body.style.backgroundColor = "rgb(253, 196, 2)"
        });
    });

});

mapa3.forEach(element => {
    element.addEventListener('click', () => {
        mapa.forEach(img => {
           document.body.style.backgroundColor = "rgb(137, 171, 253)"
        });
    });

});

mapa4.forEach(element => {
    element.addEventListener('click', () => {
        mapa.forEach(img => {
           document.body.style.backgroundColor = "rgb(4, 121, 4)"
        });
    });

});


const aperto = [
    document.querySelectorAll(efeito[0],'.aperta'),
    document.querySelectorAll(efeito[1],'.aperta'),
    document.querySelectorAll(efeito[2],'.aperta'),
    document.querySelectorAll(efeito[3],'.aperta'),
    document.querySelectorAll(efeito[4],'.aperta'),
    document.querySelectorAll(efeito[5],'.aperta'),
    document.querySelectorAll(efeito[6],'.aperta'),
    document.querySelectorAll(efeito[7],'.aperta')
]

const Mvinhas = document.querySelectorAll('.mavinha')
const monstere = document.querySelectorAll('.monstro');
const monst = document.querySelectorAll('.monster')
const monsterphrase = [
    "O oasis na verdade era um monstro",
    "monstro",
    "Voce coletou as vinhas",
    "voce aprendeu uma nova magia: controlar plantas"
]
const deserto = document.querySelectorAll('.desert');
const monstro = document.querySelectorAll('.vip');
const floresta = document.querySelectorAll('.florest');
const guardiao = document.querySelectorAll('.vipo');
const raposa = document.querySelectorAll('.vipa');
const ruinas = document.getElementById('ruinas');
const espinho = document.getElementById('espinho');
const estatua = document.getElementById('estátua');

const changeImage = (newSrc) => {
    ruinas.src = newSrc; // Directly change the src of a single image
};

espinho.addEventListener('mouseover', () => {
    changeImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fb61aaf-43da-47b0-92f4-dff1316a0638/dfu93d3-104e7e7d-24f7-488d-af46-f0d80f0c361a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmYjYxYWFmLTQzZGEtNDdiMC05MmY0LWRmZjEzMTZhMDYzOFwvZGZ1OTNkMy0xMDRlN2U3ZC0yNGY3LTQ4OGQtYWY0Ni1mMGQ4MGYwYzM2MWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Q6n8QIbgtGMEkM7SRcdG_MVJe_mqrd2bDDZ3dE2xmV4'); // Change to the image when mouse is over
    const Mespinho = document.querySelectorAll('.Mespinho.sim');
    Mespinho.forEach(button =>{
        button.innerText = 'espinhos são assustadores não são'
        button.style.color = 'red'
    })
});

espinho.addEventListener('mouseout', () => {
    changeImage('https://www.loucoporviagens.com.br/wp-content/uploads/2017/10/como-é-uma-pirâmide-por-dentro-saqqara.jpg'); // Change back to the original image when mouse is out
    const Mespinho = document.querySelectorAll('.Mespinho.sim');
    Mespinho.forEach(button =>{ 
        button.innerText = 'as paredes formam corredores para dois caminhos'
        button.style.color = 'black'
    })
});

estatua.addEventListener('mouseover', () => {
    changeImage('https://i.pinimg.com/564x/dd/84/4e/dd844ec8a00d7253d8d54913765cf940.jpg'); // Same behavior for estatua
});

estatua.addEventListener('mouseout', () => {
    changeImage('https://www.loucoporviagens.com.br/wp-content/uploads/2017/10/como-é-uma-pirâmide-por-dentro-saqqara.jpg'); // Same behavior for estatua
});


raposa.forEach(element => {
    element.addEventListener('mouseover', () => {
        floresta.forEach(img => {
            img.src = 'raposajogos.jpeg'; // Change to the image associated with mapa1
            monstere.forEach(element => { 
                element.innerText = 'Aquela que guia os espiritos perdidos, mata-la ou domestica-la tem suas vantagens'
            })
        });
    });

    element.addEventListener('mouseout', () => {
        floresta.forEach(img => {
            img.src = 'florestajogos.jpeg'; // Change back to the original image
            monstere.forEach(element => {
            element.innerText = 'Voce sente a sede de sangue no verde, e ele é seu, escolha uma presa para sacia-la'
            })
        });
    });
});

guardiao.forEach(element => {
    element.addEventListener('mouseover', () => {
        floresta.forEach(img => {
            img.src = 'guardiaojogos.jpeg'; // Change to the image associated with mapa1
            monstere.forEach(element => { 
                element.innerText = 'Um grande protetor dificil de derrotar, sua confiança deve ser conquistada ou vestir sua carcaça'
            })
        });
    });

    element.addEventListener('mouseout', () => {
        floresta.forEach(img => {
            img.src = 'florestajogos.jpeg'; // Change back to the original image
            monstere.forEach(element => {
            element.innerText = 'Voce sente a sede de sangue no verde, e ele é seu, escolha uma presa para sacia-la'
            })
        });
    });
});


aperto[3].forEach(button => {
    button.addEventListener('click', () => {
        button.style.display = "none"; // Hide the clicked button
            monstere.forEach(element => {
                element.innerText = monsterphrase[2]
            })
            monst.forEach(element => {
                element.innerText = monsterphrase[1]
            })

        
    });
});


aperto[6].forEach(button => {
    button.addEventListener('click', () => {
        button.style.display = "none"; // Hide the clicked button
            monstere.forEach(element => {
                element.innerText = monsterphrase[0]
            })
            monst.forEach(element => {
                element.innerText = monsterphrase[1]
            })
            Mvinhas.forEach(element => {
                element.innerText = monsterphrase[3]
            })
        monstro.forEach(element => {
            element.addEventListener('mouseover', () => {
                deserto.forEach(img => {
                    img.src = 'Pavão do deserto.jpeg'; // Change to the image associated with mapa1
                    monstere.forEach(element => { 
                        element.innerText = 'Pavão do deserto, uma criatura lenta que usa de ilusões para surpreender suas presas'
                    })
                });
            });
        
            element.addEventListener('mouseout', () => {
                deserto.forEach(img => {
                    img.src = 'desertojogos.jpeg'; // Change back to the original image
                    monstere.forEach(element => {
                    element.innerText = monsterphrase[0]
                    })
                });
            });
        });
    });
});

const perdido1 = document.querySelectorAll('.p1');
const perdido2 = document.querySelectorAll('.p2');
const putzF = document.querySelectorAll('.putz');

let pd1 = 1;
let pd2 = 0;

perdido1.forEach(button => {
    button.addEventListener('click', () => {
    pd1 += 1;
    if (pd1 ===1) {
        putzF.forEach(el => el.innerText = "voce segue para a esquerda e o ambiente parece o mesmo");
        
    } else if (pd1 === 2) {
        putzF.forEach(el => el.innerText = "voce tem certeza que já passou por aqui antes");
    } else if (pd1 ===3) {
        putzF.forEach(el => el.innerText = "voce percebe que esta preso em um pantano labirinto, com cheiro horrendo, para sempre");
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 2000);
    }
    });
});

perdido2.forEach(button => {
    button.addEventListener('click', () => {
    pd2 += 1;
    if (pd2 ===1) {
        putzF.forEach(el => el.innerText = "voce segue para a direita e o ambiente parece o mesmo");
        
    } else if (pd2 === 2) {
        putzF.forEach(el => el.innerText = "voce tem certeza que já passou por aqui antes");
    } else if (pd2 ===3) {
        putzF.forEach(el => el.innerText = "voce percebe que esta preso em um pantano labirinto, com cheiro horrendo, para sempre");
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 2000);
    }
    });
});

const proibidoM = document.querySelectorAll('.mE')

proibidoM.forEach(button => {
    button.addEventListener('click', () => {
        mapa3.forEach(el => el.style.display = 'none');
        document.getElementById('mP').innerText = "o mar está inacessível agora"
        document.body.style.backgroundColor = 'rgb(4, 121, 4)';
    })
})


function dado() {
    return Math.floor(Math.random() * 20) + 1;
}

let vida = 3;
let sucessos = 0

const dd = document.querySelectorAll('.d20');
dd.forEach(button => {
    button.addEventListener('click', function() {
        const result = dado();
        const rr = document.querySelectorAll('.resulta');
        rr.forEach(element => {
            element.innerText = "voce tirou " + result;
        });

        const ro = document.querySelectorAll('.resulto');
        if (result <= kk) {
            ro.forEach(element => {
                element.innerText = "voce falhou";
                vida += -1; // Assuming vida is a global variable; if not, it should be declared properly
                element.style.backgroundColor = 'red';
                
            });
        } else {
            ro.forEach(element => {
                element.innerText = vida;
                element.style.backgroundColor = 'green';
                sucessos += 1
            });
        } if (vida === 0) {
            document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
            document.querySelectorAll(".morreu").forEach(el => el.classList.add('ativa'));

            function denovo() {
                document.querySelectorAll(".Mespinho").forEach(el => el.classList.add('sim'));
                document.querySelectorAll(".morreu.ativa").forEach(el => el.classList.remove('ativa'));
                document.querySelectorAll(".falhei.ativa").forEach(el => el.classList.remove('ativa'));
                document.getElementById('passo-21').classList.remove('ativo');
                document.getElementById('passo-0').classList.add('ativo');
                document.body.style.backgroundColor = 'rgb(4, 121, 4)';
                vida = 3;
                sucessos = 0
                
                
                
            }
            setTimeout(denovo, 1000);
            document.body.style.backgroundColor = "rgb(164, 0, 0)"
        } 
        if (sucessos => 3) {
            document.querySelectorAll(".passei").forEach(el => el.classList.add('ativa'))
        } else {
            document.querySelectorAll(".passei.ativa").forEach(el => el.classList.remove('ativa'))
        }
        
    });
});

    const secretWord = "humano"; // The word the player has to guess
     function checar() {
        const userGuess = document.getElementById('guess').value.toLowerCase(); // Get user input and convert to lowercase
        const resultElement = document.getElementById('resposta');

            // Check if input is empty or not a valid word
        if (userGuess.trim() === '') {
                resultElement.textContent = 'uma resposta me de';
                return;
            }

        if (userGuess === secretWord) {
                resultElement.textContent = 'correta sua resposta esta';
                document.querySelectorAll(".passei").forEach(el => el.classList.add('ativa'))
            } else {
                document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
                document.querySelectorAll(".morreu").forEach(el => el.classList.add('ativa'));
                resultElement.textContent = 'errada sua resposta está';
                function denovo() {
                    document.querySelectorAll(".morreu.ativa").forEach(el => el.classList.remove('ativa'));
                    document.querySelectorAll(".falhei.ativa").forEach(el => el.classList.remove('ativa'));
                    document.getElementById('passo-22').classList.remove('ativo');
                    document.getElementById('passo-0').classList.add('ativo');
                    document.body.style.backgroundColor = 'rgb(4, 121, 4)';
                    resultElement.textContent = 'voce denovo'
                    resultElement.style.color = 'red'
                }
                setTimeout(denovo, 1000);
                document.body.style.backgroundColor = "rgb(164, 0, 0)"
            } 
    }
    const cormedo = [
        "rgb(160, 0, 0)",
        "rgb(120, 0, 0)",
        "rgb(80, 0, 0)",
        "rgb(40, 0, 0)"
    ];
    const falamedo = [
        "morte",
        "ao",
        "fraco",
        "herói"
    ];
    
    const imgmedo = document.getElementById('acabou');
    const recomeço = document.querySelectorAll('.fim');
    const recomena = document.querySelectorAll('.fin');
    recomeço.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Pick a random color from the cormedo array
            const randomIndex = Math.floor(Math.random() * cormedo.length);
            document.body.style.backgroundColor = cormedo[randomIndex];
            button.innerText = falamedo[randomIndex],
            button.style.backgroundColor = cormedo[randomIndex];
            imgmedo.src = 'https://www.tricurioso.com/wp-content/uploads/2018/10/olhos-667x400.jpg';
            recomena.forEach(element => {
            element.innerText = falamedo[randomIndex]
            })
        });
        button.addEventListener('click', () => {
            document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
            recomeço.forEach(button => {
            button.style.display = 'none'
            });
            recomena.forEach(element => {
                element.style.display = 'none'
            })
            imgmedo.style.display = 'none'
            function denovo() {
                document.querySelectorAll(".falhei.ativa").forEach(el => el.classList.remove('ativa'));
                document.querySelectorAll(efeito[4],".ativa").forEach(el => el.classList.remove('ativa'))
                document.getElementById('passo-23').classList.remove('ativo');
                document.getElementById('passo-0').classList.add('ativo');
                document.getElementById('arma-5').style.display = 'none';
                document.body.style.backgroundColor = 'rgb(4, 121, 4)';
            
                const tentativaElements = document.querySelectorAll('.tentativa1');
                tentativaElements.forEach(function(element) {
                    element.classList.add('ativa');
                });
            }
            setTimeout(denovo, 1000);
        });
    });
   
const tartaros = document.getElementById("hades");

tartaros.addEventListener('click', () => {
        document.body.style.backgroundColor = "rgb(215, 118, 4)"
    })

const dadivaA = document.getElementById('dadivaH')

dadivaA.addEventListener('click', () => {
    images = [
        'florestajogos.jpeg', 
        'https://img.freepik.com/fotos-premium/uma-espada-mistica-magica_312584-11180.jpg', 
        'https://th.bing.com/th/id/OIP.vTmLwIpHjFcUe_te2_t7WgAAAA?rs=1&pid=ImgDetMain',
        'https://tiermaker.com/images/media/hero_images/2024/16508996/valorant-knifes-tier-list---march-2024-16508996/165089961710788546.webp',
        'https://i.pinimg.com/originals/da/c2/1d/dac21d3bd78c749966c81a2ade944b43.jpg',
        'https://5e.tools/img/items/TDCSR/Pyremaul.webp',
        'https://th.bing.com/th/id/OIP.ZDpanWVZnXnXFx0jy5u2agAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.02475df8460b93fde84490462c59770c?rik=CcsJWTwsThe0yg&riu=http%3a%2f%2fpm1.narvii.com%2f6505%2f6c9f6e0b570d4bc146cbb8650d12db31582e9738_00.jpg&ehk=SwFe2gvNSXmByHCw46tVE4Fvp5U21MJcBkB25h59e6I%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.uQgzgoLy9bg5eANkT9dOcAAAAA?w=151&h=400&rs=1&pid=ImgDetMain'
    ];
    document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
    document.querySelectorAll(".morreu").forEach(el => el.classList.add('ativa'));
    function denovo() {
        document.querySelectorAll(".morreu.ativa").forEach(el => el.classList.remove('ativa'));
        document.querySelectorAll(".falhei.ativa").forEach(el => el.classList.remove('ativa'));
        document.getElementById('passo-24').classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');
        document.body.style.backgroundColor = 'rgb(4, 121, 4)';
    }
    setTimeout(denovo, 1000);
    document.body.style.backgroundColor = "rgb(164, 0, 0)";
    espinho.style.display = 'none';

    
});

 // Fixed variable name from 'açao' to 'acao' to avoid syntax error
const mensagemC = document.getElementById('combateM');

function combateS() {
    const acao = Math.floor(Math.random() * 2) + 1;
    if (acao === 1) {
        mensagemC.innerText = 'inimigo se prepara para te atacar';
    } 
    else if (acao === 2) { // Using else if for better control flow
        mensagemC.innerText = 'inimigo se prepara para realizar uma ação';
    }
    
}



const Combate = document.getElementById('iniciarC')
const iniciarC = document.querySelectorAll('.combate');
    const sistemaC = document.querySelectorAll('.combateA');

Combate.addEventListener('click', () => {
    const iniciarC = document.querySelectorAll('.combate');
    const sistemaC = document.querySelectorAll('.combateA');
    iniciarC.forEach(el => el.classList.add('ativa'));
    sistemaC.forEach(el => el.classList.add('ativa'));
    combateS();
})




let vidaI = 30;
const atacar = document.getElementById('A');
const esquivar = document.getElementById('E');
const resultadoC = document.getElementById('combateR');



atacar.addEventListener('click', () => {
    const acao = Math.floor(Math.random() * 2) + 1;
    if (acao === 1) {
        vidaP -= 2;  // Changed to subtract damage from vidaP
        vidaI -= dano;  // Changed operator here for clarity
        resultadoC.innerText = 'Vocês dois se batem';

    } else {
        vidaI -= dano;  // Corrected the operator and maintained consistency
        resultadoC.innerText = 'Você acerta o inimigo';
    }
    combateS()
    if (vidaP <= 0) {
        sistemaC.forEach(el => el.classList.remove('ativa'));
        document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
        document.querySelectorAll(".morreu").forEach(el => el.classList.add('ativo'));
        document.body.style.backgroundColor = "rgb(164, 0, 0)";
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 1000);
    
    } else if (vidaI <= 0) {
        document.getElementById('passo-25').classList.remove('ativo');
        document.getElementById('passo-26').classList.add('ativo');
        document.getElementById('passo-16').classList.remove('ativo');
        document.body.style.backgroundColor ="rgb(0, 255, 0)";
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 2000);
    }
});

esquivar.addEventListener('click', () => {
    const acao = Math.floor(Math.random() * 2) + 1;
    if (acao === 2) {
        resultadoC.innerText = "os dois antas fazem nada";
    } else {
        resultadoC.innerText = "voce se esquiva do ataque";
    }
    combateS()
    if (vidaP <= 0) {
        sistemaC.forEach(el => el.classList.remove('ativa'));
        document.querySelectorAll(".falhei").forEach(el => el.classList.add('ativa'));
        document.querySelectorAll(".morreu").forEach(el => el.classList.add('ativo'));
        document.body.style.backgroundColor = "rgb(164, 0, 0)";
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 1000);
    } else if (vidaI <= 0) {
        document.getElementById('passo-25').classList.remove('ativo');
        document.getElementById('passo-26').classList.add('ativo');
        document.getElementById('passo-16').classList.remove('ativo');
        document.body.style.backgroundColor ="rgb(0, 255, 0)";
        function denovo() {
            location.reload();
        }
    setTimeout(denovo, 2000);
    
    }
});

