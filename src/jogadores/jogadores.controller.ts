import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/cria-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) {}

    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto) {
        await this.jogadoresService.criarAtualizarJogador(criarJogadorDto)
    }

}
