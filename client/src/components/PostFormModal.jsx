import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useContext, useState } from "react";
import { languages } from "../constants";
import { AuthContext } from "../context/AuthContext";
import { createPost } from "../services/post-service";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const style = {
	charCount: `text-xs text-black dark:text-slate-200`,
	charCountOver: `text-xs text-orange-500`
};

const PostForm = () => {
	const {
		state: { user }
	} = useContext(AuthContext);
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [description, setDescription] = useState("");
	const [languageMd, setLanguageMd] = useState("");
	const [languageTitle, setLanguageTitle] = useState("");
	const selected = "Select Language";

	const handleSelect = (e) => {
		for (const obj of languages) {
			if (e.target.value == obj.title) {
				setLanguageMd(obj.md);
				setLanguageTitle(obj.title);
				return;
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPost = {
			code: code,
			description: description,
			languageMd: languageMd,
			languageTitle: languageTitle,
			poster: user._id
		};

		createPost(newPost)
			.then((post) => {
				navigate("/home");
			})
			.catch((err) => console.log(err));
		setCode("");
		setDescription("");
		setLanguageMd("");
		setLanguageTitle("");
	};

	return (
		<dialog id="pushModal" className="modal">
			<div className="modal-box bg-[#284B63]">
				<div className="card w-full bg-[#284B63] bg-opacity-25">
					<div className="card-body flex-row w-full">
						<div className="w-full space-y-4">
							<div className="flex w-full gap-4 text-black dark:text-slate-200">
								<Avatar />
								<div>
									<p>
										{user?.name} @{user?.username}
									</p>
								</div>
							</div>
							<form method="dialog">
								<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
							</form>

							<form onSubmit={handleSubmit} className="form-control space-y-4" method="dialog">
								<CodeEditor
									className="rounded-xl w-full text-sm shadow-md max-h-60 overflow-y-scroll"
									value={code}
									language={languageMd}
									padding={20}
									onChange={(e) => setCode(e.target.value)}
									placeholder="Enter Code"
									style={{
										overflow: "scroll"
									}}
								/>
								<div>
									<textarea
										name="description"
										className="textarea textarea-xs bg-white text-black dark:bg-[#161B22] dark:text-slate-200 w-full shadow-md  rounded-xl"
										onChange={(e) => setDescription(e.target.value)}
										value={description}
										placeholder="Add a Description"></textarea>
									<p className={description.length < 280 ? style.charCount : style.charCountOver}>
										{description.length}/280
									</p>
								</div>
								<div className="flex justify-between items-center">
									<select
										name="language"
										id="language"
										className="select select-sm rounded-full w-40 bg-white text-black dark:bg-[#161B22] dark:text-slate-200"
										defaultValue={selected}
										onChange={(e) => handleSelect(e)}>
										<option disabled value={selected}>
											Select Language
										</option>
										{languages.map((lang, idx) => (
											<option key={idx} value={lang.title}>
												{lang.title}
											</option>
										))}
									</select>
									<div className="text-end">
										<button className="hidden btn btn-sm btn-primary rounded-full lowercase sm:inline-block">
											.push()
										</button>
										<ArrowSmallRightIcon className="btn w-3/4 rounded-full btn-primary btn-sm sm:hidden" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default PostForm;
