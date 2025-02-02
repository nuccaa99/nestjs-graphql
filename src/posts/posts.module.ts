import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from './schema/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: postSchema }])],
  providers: [PostsService],
})
export class PostsModule {}
