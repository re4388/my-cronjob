

-- dotfile.dot_file_copy_from_to_map definition

-- Drop table

-- DROP TABLE dotfile.dot_file_copy_from_to_map;

CREATE TABLE dotfile.dot_file_copy_from_to_map (
	id serial4 NOT NULL,
	"fromPath" varchar NULL,
	"toPath" varchar NULL,
	"createdAt" timestamp NOT NULL DEFAULT now(),
	"updatedAt" timestamp NOT NULL DEFAULT now(),
	"type" varchar NULL,
	CONSTRAINT "PK_c032c0020d84e2317a7bada03c2" PRIMARY KEY (id),
	CONSTRAINT "UQ_8f14b48ae7135c7c3f5badeab98" UNIQUE ("fromPath"),
	CONSTRAINT "UQ_9754177d64c9a5f8f5d5280e4fc" UNIQUE (type),
	CONSTRAINT "UQ_e45f8169924be484153e7218dbd" UNIQUE ("toPath")
);


INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(3, '/Users/re4388/Library/Application Support/Code/User/keybindings.json', '/Users/re4388/project/personal/my-github-pjt/dotfiles/VSCode/m2_mac_keybindings.json', '2023-04-30 05:28:00.992', '2023-04-30 05:28:00.992', 'vscode-keybinding');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(4, '/Users/re4388/Library/Application Support/Code/User/settings.json', '/Users/re4388/project/personal/my-github-pjt/dotfiles/VSCode/m2_mac_settings.json', '2023-04-30 05:31:51.677', '2023-04-30 05:31:51.677', 'vscode-setting');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(7, '/Users/re4388/Library/Application Support/Code/User/tasks.json', '/Users/re4388/project/personal/my-github-pjt/dotfiles/VSCode/m2_mac_tasks.json', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', 'vscode-task');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(8, '/Users/re4388/.config/pet/snippet.toml', '/Users/re4388/project/personal/my-github-pjt/dotfiles/pet/m2_mac_snippet.toml', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', 'cli-pet');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(9, '/Users/re4388/.zshrc', '/Users/re4388/project/personal/my-github-pjt/dotfiles/zsh/m2_mac_zshrc', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', 'zshrc');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(10, '/Users/re4388/.oh-my-zsh/custom/aliases.zsh', '/Users/re4388/project/personal/my-github-pjt/dotfiles/zsh/m2_mac_aliases.zsh', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', 'aliases.zsh');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(11, '/Users/re4388/.gitconfig', '/Users/re4388/project/personal/my-github-pjt/dotfiles/git/.gitconfig_m2_mac', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', '.gitconfig');
INSERT INTO dotfile.dot_file_copy_from_to_map
(id, "fromPath", "toPath", "createdAt", "updatedAt", "type")
VALUES(12, '/Users/re4388/.config/starship.toml', '/Users/re4388/project/personal/my-github-pjt/dotfiles/starship/starship_m2_mac.toml', '2023-04-30 15:35:01.036', '2023-04-30 15:35:01.036', 'starship.toml');
