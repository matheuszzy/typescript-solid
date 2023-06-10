import { MessageProtocol } from '../classes/interfaces/messaging-protocol';

export class Message implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
