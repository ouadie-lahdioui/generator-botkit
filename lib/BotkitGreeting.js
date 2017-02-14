const chalk = require('chalk');

const botkitGreeting =
'\n   BBBBBBBBBBBBBBBBB        OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKKIIIIIIIIIITTTTTTTTTTTTTTTTTTTTTTT ' +
'\n   B::::::::::::::::B     OO:::::::::OO   T:::::::::::::::::::::TK:::::::K    K:::::KI::::::::IT:::::::::::::::::::::T ' +
'\n   B::::::BBBBBB:::::B  OO:::::::::::::OO T:::::::::::::::::::::TK:::::::K    K:::::KI::::::::IT:::::::::::::::::::::T ' +
'\n   BB:::::B     B:::::BO:::::::OOO:::::::OT:::::TT:::::::TT:::::TK:::::::K   K::::::KII::::::IIT:::::TT:::::::TT:::::T ' +
'\n   B::::B     B:::::BO::::::O   O::::::OTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK  I::::I  TTTTTT  T:::::T  TTTTTT   ' +
'\n   B::::B     B:::::BO:::::O     O:::::O        T:::::T          K:::::K K:::::K     I::::I          T:::::T           ' +
'\n   B::::BBBBBB:::::B O:::::O     O:::::O        T:::::T          K::::::K:::::K      I::::I          T:::::T           ' +
'\n   B:::::::::::::BB  O:::::O     O:::::O        T:::::T          K:::::::::::K       I::::I          T:::::T           ' +
'\n   B::::BBBBBB:::::B O:::::O     O:::::O        T:::::T          K:::::::::::K       I::::I          T:::::T           ' +
'\n   B::::B     B:::::BO:::::O     O:::::O        T:::::T          K::::::K:::::K      I::::I          T:::::T           ' +
'\n   B::::B     B:::::BO:::::O     O:::::O        T:::::T          K:::::K K:::::K     I::::I          T:::::T           ' +
'\n   B::::B     B:::::BO::::::O   O::::::O        T:::::T        KK::::::K  K:::::KKK  I::::I          T:::::T           ' +
'\n   BB:::::BBBBBB::::::BO:::::::OOO:::::::O      TT:::::::TT      K:::::::K   K::::::KII::::::II      TT:::::::TT       ' +
'\n   B:::::::::::::::::B  OO:::::::::::::OO       T:::::::::T      K:::::::K    K:::::KI::::::::I      T:::::::::T       ' +
'\n   B::::::::::::::::B     OO:::::::::OO         T:::::::::T      K:::::::K    K:::::KI::::::::I      T:::::::::T       ' +
'\n   BBBBBBBBBBBBBBBBB        OOOOOOOOO           TTTTTTTTTTT      KKKKKKKKK    KKKKKKKIIIIIIIIII      TTTTTTTTTTT       ' +
'\n ' +
'\n                                  ' + chalk.red('Allo Aloo, welcome to Botkit, ' + chalk.magenta('ladies') + ' and ' + chalk.cyan('gentlemen') + ' !') +
'\n                   ' + chalk.red('I\'m the most popular open-source toolkit for creating bots for messaging platforms');

module.exports = () => {
  return botkitGreeting;
};
