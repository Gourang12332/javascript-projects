//  6
// 4
// 1 3
// 2 10
// 3 1
// 3 5
// 2
// 1 5
// 2 4
// 10

// 3 6
// 3 7
// 1 2
// 1 7
// 3 100
// 3 44
// 2 100
// 2 98
// 1 3
// 3 99


// 6
// 1 5
// 2 10
// 1 9
// 2 2
// 3 2
// 3 9
// 5
// 1 1
// 2 2
// 3 1
// 3 2
// 3 3
// 6
// 1 10000
// 2 900000000
// 3 500000000
// 1 100000000
// 3 10000
// 3 900000001*/
import java.util.ArrayList;
import java.util.Scanner;
class codechef{

public static int checking(ArrayList<Long> block,ArrayList<Long>check){
int b = block.size();
int c = check.size();
int idx1 =0 ;
int idx2 = 0 ;
Long a = 0L;
int count = 0 ;

while (idx1!=b) {
 a = block.get(idx1);
 count++;
 while (idx2!=c){
  if(check.get(idx2) == a){
	count--;
    } 
 idx2++;
 }
idx1++;	
}
return count;
}
public static void main(String[] args) {
 Scanner sc = new Scanner(System.in);
 int t = sc.nextInt();
 while(t!=0){
 int cons = sc.nextInt();
 ArrayList<Long> block = new ArrayList<>();
 ArrayList<Long> check = new ArrayList<>();
 Long i = 0L ;
 Long j = 0L ;
 
 while (cons!=0) {
	
    int a = sc.nextInt();
	if(a==1){
	Long c = sc.nextLong();
	if(i<c){
	i = c ;
	}
	}
	if(a==2){
	Long d = sc.nextLong();
	j = d;
	// if(j>=d){
	// j = d;
	// }
}
	if(a==3){
	Long e = sc.nextLong();
	check.add(e);
	}
	cons--;

	
 }
 
 
 int a = 0 ;
 if(i<=j){
 while(i!=j){
		block.add(i);
		i++;
	}	
a =1 ;
} else{
System.out.println(0);
}
  if(a==1){
  int ans = checking(block,check);
  
 System.out.println(ans);
 ;
  } else{
  break;
  }
 t--;
 }
}
}