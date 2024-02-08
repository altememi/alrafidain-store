'use client';

import Avatar from "@/app/com/ui/Avatar";
import Headinig from "@/app/com/ui/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
    product: any;
}


const ListRating: React.FC<ListRatingProps> = ({product}) => {
    return ( 
        <section>
            <Headinig title="Product Comments" />
            <div className="text-sm mt-5">
                {
                    product.reviews && product.reviews.map((review: any) => {
                        return (
                            <div key={review.id} className="max-w-[400px]">
                                <div className="flex gap-3 items-center">
                                    <Avatar src={review?.user.image}/>
                                    <div className="font-semibold">{review?.user.name}</div>
                                    <div className="font-light">
                                        {
                                            moment(review.createdDate).fromNow()
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Rating readOnly value={review.rating}/>
                                    <div className="ml-2">
                                        {review.comment}
                                        <hr className="my-4"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default ListRating;