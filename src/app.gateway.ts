import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  //WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // @WebSocketServer() was: Server;
  private logger: Logger = new Logger('Message Broker');
  afterInit(server: Server) {
    console.log(server);
    this.logger.log('Message broker intialized');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(client.id.toString() + ' diconnected.');
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log('ARGS' + args);
    this.logger.log(client.id.toString() + ' is connected.');
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): WsResponse<string> {
    // this.was.emit('msgToClient', payload);
    return { event: 'msgToClient', data: payload };
  }
}
