public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,Type,Industry FROM Account WHERE Type IN ('Customer - Channel','Customer - Direct') LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getFilterAccountsByType(String type){
        return [SELECT Id,Name,Type,Industry FROM Account WHERE Type =:type LIMIT 5];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccountBySearchKey(String searchKey){
        String key = '%' +searchKey+ '%';
        return [SELECT Id,Name,Type,Industry FROM Account WHERE Name LIKE :key];
    } 
}
