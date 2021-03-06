# --- aplazame-js

npmdir = $(shell npm bin)
whoami = $(shell whoami)

# TASKS

git.hooks:
	@./bin/git-hooks

bower-install:
	@echo "running bower install"
	@bower install --allow-root > /dev/null 2>&1

install: bower-install
	@echo "running npm install"
	@npm install > /dev/null 2>&1

tests:
	@$(npmdir)/eslint src/**
	@$(npmdir)/mocha src/**/*-tests.js

test-tools:
	@$(npmdir)/watch "date +\"%Y-%m-%d %T\" && $(npmdir)/mocha -R spec tests" src/tools tests

build: install tests
	@echo "running make build"
	node make build

dev: git.hooks install
	node make dev

live: git.hooks install
	node make live

master.increaseVersion:
	git checkout master
	@git pull origin master
	@node make pkg:increaseVersion

git.increaseVersion: master.increaseVersion
	git commit -a -n -m "increased version [$(shell node make pkg:version)]"
	@git push origin master

git.updateRelease:
	git checkout release
	@git pull origin release
	@git merge --no-edit master

# release: tests git.increaseVersion git.updateRelease
# 	@git push origin release
# 	@echo "\n\trelease version $(shell node make pkg:version)\n"
# 	@git checkout master

release: install tests git.increaseVersion git.updateRelease build
	@git add aplazame.js -f
	@git add aplazame.min.js -f
	@git add dist -f --all
	@git add public -f --all
	-git commit -n -m "updating built versions"
	@git push origin release
	@echo "\n\trelease version $(shell node make pkg:version)\n"
	@node make release
	@git checkout master

echo:
	@echo "make options: test build dev live"

# DEFAULT TASKS

.DEFAULT_GOAL := build
