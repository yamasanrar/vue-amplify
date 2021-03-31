import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja';
// -------↓追加↓-------
import awsconfig from './aws-exports';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);
// ------↑ここまで↑-----
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

let languageDict = {
  ja:{
      'Sign in to your account' : 'アカウントにサインイン',
      'Username' : 'ユーザ名',
      'Enter your Username' : 'ユーザ名を入力してください',
      'Password' : 'パスワード',
      'Enter your password' : 'パスワードを入力してください',
      'Forgot your password? ' : 'パスワードを忘れた場合',
      'Reset password' : 'パスワードのリセット',
      'No account? ' : 'まだアカウントがない場合',
      'Create account' : 'アカウント作成',
      'Sign In' : 'サインイン',
      'Sign Out' : 'サインアウト',
  }
}
AmplifyModules.I18n.putVocabularies(languageDict)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
