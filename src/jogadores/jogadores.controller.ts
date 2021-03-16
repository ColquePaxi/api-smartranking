import { Controller, Post } from '@nestjs/common';

@Controller('jogadores')
export class JogadoresController {

    @Post()
    async criarAtualizarJogador() {

        return JSON.stringify({
            "nome": "Colque"
        })

    }

}
