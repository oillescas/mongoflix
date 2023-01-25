import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/outline";
import Highlighted from "./Highlighted";

const getHighlightAtPath = (highlights, path) => {
    const highlight = highlights?.find((e) => e.path === path);
    const firstHit = highlight?.texts?.find((e) => e.type === "hit");
    return firstHit?.value ?? "";
};

const Movie = ({ movie, showDetail = true }) => {
    const titleHighlight = getHighlightAtPath(movie.highlights, "title");
    const plotHighlight = getHighlightAtPath(movie.highlights, "plot");
    const genresHighlight = getHighlightAtPath(movie.highlights, "genres");
    const countriesHighlight = getHighlightAtPath(movie.highlights, "countries");

    const [isErrorLoadingImage, setIsErrorLoadingImage] = useState(false);

    return (
        <Link href={`/movies/${movie._id}`}>
            <div className="bg-white w-full max-w-sm mx-auto rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition relative">
                <div className="flex items-end justify-end h-80 w-full bg-cover relative">
                    {movie.poster && (
                        <>
                            <span className="h-80 w-full relative overflow-hidden">
                                <img
                                    src={"https://source.unsplash.com/random/1920x1080"}
                                    alt={"blur bg"}
                                    className="absolute min-w-full max-w-full max-h-full blur-md object-contain -z-10 scale-[3]"
                                ></img>
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="absolute min-w-full max-w-full max-h-full blur-md object-contain -z-10 scale-[3]"
                                ></img>
                            </span>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="absolute min-w-full max-w-full max-h-full z-10 object-contain"
                            ></img>
                            {/* alternative for next/image */}
                            {/* <Image
                                src={"/"}
                                alt={movie.title}
                                layout="fill"
                                objectFit="cover"
                                className="absolute z-0 scale-125"
                                blurDataURL={
                                    !isErrorLoadingImage
                                        ? movie.poster
                                        : "https://source.unsplash.com/random/1920x1080"
                                }
                                placeholder="blur"
                            />
                            <Image
                                src={movie.poster}
                                alt={movie.title}
                                layout="fill"
                                objectFit="contain"
                                className="absolute z-0"
                                onError={() => setIsErrorLoadingImage(true)}
                            /> */}
                        </>
                    )}
                    <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
                        <PlayIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="px-5 py-3 relative">
                    <h3 className="text-gray-800 uppercase text-2xl font-semibold">
                        <Highlighted text={movie.title} highlight={titleHighlight} />
                    </h3>
                    {showDetail && (
                        <>
                            {movie.year && movie.genres && (
                                <>
                                    <h4 className="text-gray-600 text-sm font-medium">
                                        {movie.year} -
                                        <Highlighted
                                            text={movie.genres.join(", ") ?? ""}
                                            highlight={genresHighlight}
                                        />
                                    </h4>
                                </>
                            )}
                            {movie.countries && (
                                <>
                                    <h4 className="text-gray-600 text-sm font-medium">
                                        <Highlighted
                                            text={movie.countries.join(", ") ?? ""}
                                            highlight={countriesHighlight}
                                        />
                                    </h4>
                                </>
                            )}
                            <h4 className="text-gray-600 text-sm mt-2">
                                <Highlighted text={movie.plot ?? ""} highlight={plotHighlight} />
                            </h4>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Movie;
