// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userimagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface PostProps {
    userimagePath: string;
    username: string;
    likes: number;
}
export type { PostProps };

interface CommentProps {
    userimagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];

}
export type { CommentProps };

