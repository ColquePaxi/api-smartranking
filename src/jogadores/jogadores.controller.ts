import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/cria-jogador.dto';

@Controller('jogadores')
export class JogadoresController {

    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto) {
        const { email, telefoneCelular } = criarJogadorDto
            return JSON.stringify(`{
                "email": ${email},
                "telefoneCelular": ${telefoneCelular}
            }`)
    }

}
