import { Controller, Get, Param, Post, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { PointService } from './point.service';
import { ReadException } from './exception/read.exception';
import { EventException } from './exception/event.exception';

@Controller('points')
export class PointController {
    constructor(private readonly pointService: PointService) {}

    @Post(':id')
    @UseGuards(AuthGuard)
    async updatePoints(@Session() session: SessionContainer, @Param('id') eventId: string) {
        if (!eventId || eventId === '') {
            throw new EventException('Event id is required');
        }
        const user = await session.getUserId();
        console.log(user);
        const { metadata } = await UserMetadata.getUserMetadata(user);
        console.log(metadata);
        if (metadata.role !== 'admin') {
            throw new ReadException('You are not authorized to update points');
        }
        return await this.pointService.updatePoints(eventId);
    }

    @Get('college')
    async getCollegePoints() {
        return await this.pointService.getCollegePoints();
    }

    @Get('user')
    async getUserPoints() {
        return await this.pointService.getUsersPoints();
    }
}
