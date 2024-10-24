# Setup

## 1. Einrichtung Code Qualitätstools

### 1.1 ESLint in der Angular-Anwendung hinzufügen

Führen Sie folgenden Befehl aus, um ESLint zu Ihrem Angular-Projekt hinzuzufügen:

```
ng add @angular-eslint/schematics
```

### 1.2 Prettier installieren und konfigurieren

Installieren Sie Prettier als Entwicklungsabhängigkeit:

```
npm install prettier --save-dev
```

Fügen Sie das folgende Skript zur package.json hinzu, um den Code innerhalb des src/app-Ordners zu formatieren:

```
"scripts": {
 "format": "npx prettier --write ./src/app/*"
}
```

### 1.3 Environments für Angular generieren

Generieren Sie die Umgebungskonfigurationsdateien:

```
ng generate environments
```

### 1.4 Commitlint einrichten

Installieren Sie Commitlint und die konventionelle Konfiguration global:

```
npm install @commitlint/cli @commitlint/config-conventional
```

Fügen Sie die folgende Konfiguration zur package.json hinzu:

```
"commitlint": {
 "extends": [
   "@commitlint/config-conventional"
 ]
}
```

### 1.5 lint-staged einrichten

Installieren Sie lint-staged als Entwicklungsabhängigkeit:

```
npm install --save-dev lint-staged
```

Fügen Sie die folgende Konfiguration zur package.json hinzu:

```
"lint-staged": {
 "*.{ts,js,html}": "eslint --cache --fix",
 "*.{ts,js,html,css,scss,less,md}": "prettier --write"
}
```

### 1.6 Husky einrichten

Installieren Sie Husky:

```
npm install --save-dev husky

```

Initialisieren Sie Husky:

```
npx husky init
```

Fügen Sie das folgende Skript zur package.json hinzu, um Husky vorzubereiten:

```
"scripts": {
 "prepare": "husky"
}
```

Führen Sie das vorbereitende Skript aus:

```
npm run prepare
```

Erstellen Sie den Commit-Hook für Commitlint:

```
echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
```

Erstellen Sie den Pre-Commit-Hook für lint-staged:

```
echo 'npx --no-install lint-staged' > .husky/pre-commit
```

## 2. Deployment auf Azure

Installieren sie das Azurze-Plugin im Visual Studio und führen Sie folgende Schritte durch

1. Add static web app
2. Select resource group
3. Enter a name for the static web app
4. Select a Service Plan
5. Select Angular
6. Enter "/" for the directory
7. Blank
8. Enter dist/<yout-app-name>/browser

A Github Action will automatically get created

## 3. CI/CD-Pipeline einrichten:

Im folgenden Youtube-Video wird die Einrichtung Step-by-Step erklärt: https://www.youtube.com/watch?v=1vqJ1_AAcUg
