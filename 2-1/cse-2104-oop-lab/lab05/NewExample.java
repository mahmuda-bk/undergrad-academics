public class NewExample {  
    int a,b;  
    NewExample(int a,int b)  
    {  
        this.a=a;  
        this.b=b;  
    }  
    void display()  
    {  
        System.out.println(a+b);  
    }  
    public static void main(String[] args) {  
        NewExample obj=new NewExample(10,20);  
        obj.display();  
    }  
}  
