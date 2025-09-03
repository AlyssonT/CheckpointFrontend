import { Link } from "react-router";
import { Paper } from "../../../components/Paper";
import { MdPlace } from "react-icons/md";

export function Welcome() {
  return (
    <Paper className="p-8 shadow-xl rounded-xl">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-lg">
          Welcome to{" "}
          <span className="text-secondary inline-flex">
            Checkpoint! <MdPlace />
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="h-52 w-64 shrink-0 flex items-center justify-center">
            <img
              src="sorrindo.svg"
              alt="Logo checkpoint"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-lg leading-normal!">
              The place where{" "}
              <span className="font-semibold text-secondary">gamers</span> come
              together to discover, review, and share their favorite games.
            </p>
            <span className="font-medium">Here you can:</span>
            <ul className="list-disc list-inside ml-4 text-base">
              <li>
                Explore a wide library of games with detailed information.
              </li>
              <li>
                Read and write reviews to help others find their next adventure.
              </li>
              <li>Create your profile, track your reviews.</li>
              <li>
                Discover new titles through recommendations and genre tags.
              </li>
            </ul>
            <span className="font-semibold text-secondary">
              Log in or sign up now and join our passionate gaming community!
            </span>
            <div className="flex gap-3 justify-center mt-4">
              <span className="text-base">Explore</span>
              <Link to={"/search"}>
                <span className="px-4 py-2 bg-secondary text-white rounded-full font-semibold shadow hover:bg-hover-secondary transition">
                  GAMES
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
