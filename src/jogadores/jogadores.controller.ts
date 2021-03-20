import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/cria-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) {}

    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto) {
        await this.jogadoresService.criarAtualizarJogador(criarJogadorDto)
    }

    @Get()
    async consultarJogadores(): Promise<Jogador[]> {

        return this.jogadoresService.consultarTodosJogadores();

    }
}
