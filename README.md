# Welcome to your Expo app 👋

### チェック項目
| ライブラリ | バージョン            | 備考                                                                                      |
| --- |------------------|-----------------------------------------------------------------------------------------|
| tamagui | 1.109以下          | Navigation Bar上でPopoverを表示するためには、Triggerを配置する必要がある                                      |
| tamagui | 1.110(?) ~ 1.115 | Popover.Triggerを配置しても、Popoverが表示されない |
| tamagui | 1.116以上          | Androidでダイアログが表示されない                                                                    |
| tamagui | 1.121未満（？）       | webでビルドすると `react-native-web module not found`というエラーが発生する（react-native-webをインストールすると治る） |