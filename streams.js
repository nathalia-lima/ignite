/* 
obter pequenas partes do recurso antes de ler ele por completo

Readable Streams - stream de leitura
Writable Streams - stream de escrita - ex netfliz, spotify

no node toda porta de entrada e saida é uma stream


process.stdin //lendo
    .pipe(process.stdout) //escrevendo
*/

import { Readable, Writable, Transform } from 'node:stream'

class Streams extends Readable {
    index = 1

    _read(){
        const i = this.index++

        setTimeout(() => {
            if (i > 100){
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

class InverseNumber extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}

class Mutiply extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new Streams()
    .pipe(new InverseNumber())
    .pipe(new Mutiply())