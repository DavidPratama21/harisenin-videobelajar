import { useState } from "react";
import { Link } from "react-router";
import Stars_rating from "./Stars_rating";

const Card = ({ image, tutor, rating, reviewers }) => {
    const [interactiveRating, setInteractiveRating] = useState(0);
    return (
        <Link
            to="/detailProduk"
            className="grid rounded-[10px] p-4 gap-2 bg-other-primary border border-other-border sm:w-[384px] sm:p-5"
        >
            {/* 4805, Img, Title, Tutor */}
            <div className="flex gap-3 items-center sm:grid">
                {/* Image */}
                <img
                    src={image}
                    alt="Image Class"
                    className="h-[82px] sm:h-[193px] object-cover aspect-square sm:aspect-video rounded-[10px]"
                />

                {/* 4804, Title & Tutor */}
                <div className="grid gap-2 sm:gap-3">
                    {/* Title */}
                    <div className="grid gap-2">
                        <h6 className="text-dark-primary font-semibold text-base leading-[120%] sm:text-lg">
                            Big 4 Auditor Financial Analyst
                        </h6>
                        <p className="hidden sm:block font-medium leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Mulai transformasi dengan instruktur profesional,
                            harga yang terjangkau, dan...
                        </p>
                    </div>

                    {/* 4496, Tutor */}
                    <div className="flex gap-2 items-center sm:gap-2.5">
                        {/* Foto Profile */}
                        <img
                            src={tutor}
                            alt="Profile Image"
                            className="h-9 aspect-square rounded-xl"
                        />
                        {/* Title */}
                        <div>
                            <p className="font-medium text-dark-primary leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                                Jenna Ortega
                            </p>
                            {/* 4497 */}
                            <div className="flex gap-1 sm:text-sm">
                                <p className="text-xs font-normal text-dark-secondary leading-[140%] tracking-[0.2px] sm:text-sm">
                                    Senior Accountant
                                </p>
                                <span className="hidden text-dark-secondary sm:inline">
                                    di
                                </span>
                                <span className="hidden font-bold text-dark-secondary sm:inline">
                                    Gojek
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4498, Rating & price */}
            <div className="flex justify-between items-center">
                {/* 4495, rating */}
                <Stars_rating
                    rating={rating}
                    onRatingChange={setInteractiveRating}
                    displayOnly={true}
                    amountRated={reviewers}
                />
                <p className="font-semibold text-xl text-primary leading-[120%] sm:text-2xl">
                    Rp 300K
                </p>
            </div>
        </Link>
    );
};

export default Card;
